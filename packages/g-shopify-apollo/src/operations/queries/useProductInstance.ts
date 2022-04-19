import {ProductComponentProps} from "@/types";
import {useProduct} from "./useProduct";
import {toRefs, ref, watch} from "vue";

export const useProductInstance = (props: ProductComponentProps) => {
    const {handle = ref(undefined), variant_id = 1} = toRefs(props)
    const product = useProduct(props)
    //  const {isReady } = product
// {Product, isReady,loading, Variants, Options, OptionValues,optionsUpdated,getVariant,getVariantByIndex}

    watch(product, (value) => {
        // debugger;
    })
    return {
        ...product
    }
}

