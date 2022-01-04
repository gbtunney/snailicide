<template>
  <div class="ProductGroup">
    <h1>Group Demo</h1>
    <GroupInstance v-bind="$data.group">
      <div slot-scope="{ ID, note,Items,Status}">
        Loading {{ Status }}
        <div v-for="child, index in Items" :key="index">
          <product-child v-bind="child.$toJson()" >
            <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">
              <div v-if="child">child:{{child.handle}}-</div>
              <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(200)"/>
              <div class="flex" v-if="Product && SelectedVariant">
                {{ Product.title }} -- {{SelectedVariant.title}}
                <SfQuantitySelector :qty="RequestedQuantity" :min="0"
                    :max="SelectedVariant.quantity"
                    @input="UpdateInstance({ quantity: $event},Instance)"/>
                <button class="bg-accent-secondary" @click="Instance.$delete()">REMOVE ME</button>
              </div>

            </div>
          </product-child>
        </div>

      </div>
    </GroupInstance>
  </div>
</template>
<script>

import {SfQuantitySelector} from "@storefront-ui/vue";
import {toInteger}  from "@snailicide/g-library"

const groupData = {
  "id": 12345578899,
    "currency": "USD",
    "note": "gillians group",
    "items": [
  {
    "type": "INSTANCE",
    "properties": {
      "message": "item 2"
    },
    "meta": "null",
    "url": "null",
    "handle": "balance",
    "variant_id": 22589290119286,
    "Variant": null,
    "selection_mode": "extended",
    "add_to_cart_enabled": false,
    "quantity_editable": true,
    "variant_editable": true,
    "options_editable": true,
    "quantity": 1
  },
  {
    "type": "INSTANCE",
    "properties": {
      "message": "item 2"
    },
    "meta": "null",
    "url": "null",
    "handle": "balance",
    "variant_id": 22589290119286,
    "Variant": null,
    "selection_mode": "extended",
    "add_to_cart_enabled": false,
    "quantity_editable": true,
    "variant_editable": true,
    "options_editable": true,
    "quantity": 1
  },
  {
    "type": "INSTANCE",
    "properties": {
      "message": "item 2"
    },
    "meta": "null",
    "url": "null",
    "handle": "local",
    "variant_id": 5,
    "Variant": null,
    "selection_mode": "extended",
    "add_to_cart_enabled": false,
    "quantity_editable": true,
    "variant_editable": true,
    "options_editable": true,
    "quantity": 2
  }
]
}


export default {
  name: "ProductGroup",
  components: {SfQuantitySelector},
  data: function () {
    return {
      group: groupData,
    }
  },
  props: {},
  methods: {
    getChildID(parent_id, index){
      const str   =`${parent_id}${index}`
console.log("THE ID OF CHIHLD IS !!!" ,toInteger(str) )
     // return toInteger(str)

    }
  }
}
</script>
