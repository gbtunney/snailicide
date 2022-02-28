import {defineStore} from 'pinia'
import Processor from "windicss";
import {Config, Theme, BaseTheme, Shortcut} from "windicss/types/interfaces";
//import {Map} from 'immutable';
import useWindiCSS from './../useWindiCSS'

const {utilities} = useWindiCSS()
const {flattenColorPalette, colorPalatteMap} = utilities

import {IChromaColorData} from './../useChroma'
//const {deltaE, chroma} = useChroma();

export interface IWindiCSSState {
    config?: Config
    processor?: Processor
    color_map?: Map<string, IChromaColorData> | undefined
}

export const useWindiCSSStore = defineStore("windicss", {
    state: (): IWindiCSSState => ({
        config: undefined,
        processor: undefined,
    }),

    getters: {
        currentThemeColors: state => ((state.processor) ? state.processor.allTheme.colors : undefined),
        getSortedColors: (state) => () => ((state.processor) ? state.processor.allTheme.colors : undefined),
        isInitialized: (state) => (state.processor && state.config) ? true : false
    },
    actions: {
        initialize(config: Config) {
            this.config = config
            this.processor = new Processor(config)
            this.color_map = ( this.isInitialized)? colorPalatteMap(this.currentThemeColors):undefined
            /*  const t estColor = mycolor_map.get("gumleaf")
              const sortColors = (property = 'lightness', _map: Map<string, IChromaColorData>, reference: IChromaColorData | Chromable | undefined = undefined) => {
                  return _map.sortBy(
                      (_color) => {
                          const {chroma: currentColor} = _color
                          if (RA.isNumber(currentColor[property])) return currentColor[property]
                      }
                  );
              }*/
        }
    }
})
export default useWindiCSSStore
