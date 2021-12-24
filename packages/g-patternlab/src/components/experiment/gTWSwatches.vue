<template>
  <div class="gTWSwatches font-style-sm-caps">
    <div v-for="(swatch, name,index) in TW_Swatches" :key="index">
      <!-- swatch group name --->
      <h1 v-text="name"/>
      <hr>
      <styled-container-grid as="ul" :columns="10">
        <li v-for="(item,index ) in swatch" :key="index" class="w-full">
          <div class="p-2 flex flex-column justify-end" :style="getStyle(item.hex_color)" style="flex-direction: column;justify-content: space-between;">
            <p class="text-lg" v-text="item.name"/>
            <ul class="border border-opacity-80 border-primary border-1 border-solid m-0">
              <li v-for="(btn , index ) in item.classes" style="fontSize: 11px;" class="text-center text-sm bg-opacity-30 cursor-pointer text-black m-1 bg-white font-style-sans"
                  v-text="btn.split('-')[0]"
                  @click="$clipboard(btn)"
                  :key="index"/>
            </ul>
          </div>
        </li>
        </styled-container-grid>
    </div>
  </div>
</template>
<script>
import * as R from 'ramda'
import * as RA from "ramda-adjunct"
import twcolors from "./../../../tailwindDump.json"
import chroma from "chroma-js";
import {isInteger}  from "@snailicide/g-library";
import {StyledContainerGrid} from "@/components/ui/styled";

export default {
  name: "gTWSwatches",
  components: {
    StyledContainerGrid
  },
  data: function () {
    return {}
  },
  props: {
    /**
     * Sets the number of columns
     */
    column_count: {
      type: [Number, Boolean, String],
      default: 12
    },
    /** Height
     * String with unit, int will have px added
     */
    height: {
      default: false,
      type: [Boolean, Number, String]
    },
  },
  methods: {
    groupByPrefix(swatches) {
      const byPrefix = R.groupBy(function (swatch) {
        const {name = ''} = swatch;
        const [prefix = ""] = name.toString().split('-')
        return prefix;
      });
      return  byPrefix(swatches);
    },
    getStyle(hex_color = false, _height = this.$props.height) {
      if (!hex_color) return
      return {
        fontSize: '16px',
        ...(_height) ? {'height': (isInteger(_height)) ? `${_height}px` : _height} : {},
        color: this.invertLuminance(hex_color),
        border: `1px solid ${this.invertLuminance(hex_color)}`,
        'background-color': (hex_color) ? hex_color : ''
      }
    },
    invertLuminance(hex_color, _height = this.$props.height) {
      if (!hex_color || !chroma.valid(hex_color)) return '#FF0000'
      const lum = .5 - (.5 - chroma(hex_color).luminance())
      if (lum < .3) return 'white'
      return 'black'
    },
  },
  computed: {
    TW_Swatches() {
      const {colors = {}, keys :{ colors:colorkey=[] } } = twcolors
      return  this.groupByPrefix(Array.from(Object.entries(colors)).map(function ([key, value]) {
            return {
              name: key,
              hex_color: value,
              classes: RA.ensureArray(colorkey).map(function (prefix) {
                return `${prefix}-${key}`
              })
            }
          }
      ))
    },
  }
}
</script>

<docs lang="md">
This button is amazing, use it responsibly.
## Examples

Tailwind Color Swatches

```jsx
<gTWSwatches column_count="6" :height="200">Tailwind</gTWSwatches>
```

</docs>
