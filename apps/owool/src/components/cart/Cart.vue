<template>
  <div class="CartTest">
    <h1>I AM A CART!!</h1>
    <cart-provider >

      <div slot-scope="{Mounted, ID, note,Items,Status,Token}">
        <h1 v-if="Mounted"> token {{Token}} id {{ID}}</h1>
        <div v-for="child, index in Items" :key="index">
          <ProductInstanceProvider v-bind="child.$toJson()">
            <div slot-scope="{Testing,Instance,ID,UpdateVariant,Quantity,QuantityAvailable,AddToCart,Product,SelectedVariant,Variants,SelectedVariantImage}">
              ------ {{Testing}} {{Product.title}}
              <!--              <ProductProvider v-bind="Instance.$toJson()">
                              <div slot-scope="{Product,SelectedVariant,Variants,SelectedVariantImage}">
                                &lt;!&ndash;        <div slot-scope="{Ready, Product,SelectedVariant,UpdateInstance,RequestedQuantity,Instance,SelectedVariantImage}">&ndash;&gt;
                                <div v-if="child">child:{{ child.handle }}-</div>
                                <img v-if='SelectedVariantImage' :src="SelectedVariantImage.getSrc(200)"/>
                                <div class="flex" v-if="Product && SelectedVariant">
                                  {{ Product.title }} &#45;&#45; {{ SelectedVariant.title }}
                                  <input type="number" :value="Quantity" :min="0"
                                      :max="SelectedVariant.quantity"
                                      @input="UpdateInstance({ quantity: $event},Instance)"/>
                                  <button class="bg-accent-secondary" @click="Instance.$delete()">REMOVE ME</button>
                                </div>
                              </div>
                            </ProductProvider>-->
            </div>
          </ProductInstanceProvider>
        </div>
      </div>
    </cart-provider>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data: function () {
    return {}
  },
  props: {}
}
</script>
