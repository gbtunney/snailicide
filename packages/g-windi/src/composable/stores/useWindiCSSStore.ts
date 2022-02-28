import { defineStore } from 'pinia'
import Processor from "windicss";
import {Config, Theme, BaseTheme, Shortcut} from "windicss/types/interfaces";
import {Map, List,fromJS} from 'immutable';
import useWindiCSS from './../useWindiCSS'
import useChroma,{ IChromaColorData} from './../useChroma'
import {Chromable} from "chroma.ts";
import * as R from "ramda"
import * as RA from "ramda-adjunct"
const {utilities}=  useWindiCSS()
const {flattenColorPalette,colorPalatteMap }=utilities
const { deltaE,chroma }=useChroma();
interface IWindiCSSState {
  config?: Config | undefined
  processor?: Processor | undefined
  color_map?: Map<string,IChromaColorData> | undefined
}

export const useWindiCSSStore = defineStore("windicss",{
  state: () :IWindiCSSState =>({
    config : undefined,
    processor:undefined
  }),
  getters: {
  currentThemeColors: state => ( (state.processor) ?  state.processor.allTheme.colors : undefined),
    getSortedColors: (state) =>()=> ( (state.processor) ?  state.processor.allTheme.colors : undefined),

  },
  actions:{
    initialize(config:Config) {
     this.config = config

      if ( RA.isUndefined( this.processor ))
      this.processor = new Processor(config)
   //   const mycolor_map = colorPalatteMap(this.currentThemeColors)

      /*  const t estColor = mycolor_map.get("gumleaf")
        const sortColors = (property = 'lightness', _map: Map<string, IChromaColorData>, reference: IChromaColorData | Chromable | undefined = undefined) => {
            return _map.sortBy(
                (_color) => {
                    const {chroma: currentColor} = _color
                    if (RA.isNumber(currentColor[property])) return currentColor[property]
                }
            );
        }*/
      //  console.log("current_theme_colors", sortColors("saturation", mycolor_map, mycolor_map.get("gumleaf")).toArray())

      //  colorPalatteMap
    }
  }
})
export default useWindiCSSStore
