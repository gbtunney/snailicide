import {computed, ComputedRef, defineProps, ref, Ref, toRefs, watch, WritableComputedRef} from "vue";
import {ProductByHandleQueryVariables, useProductByHandleQuery} from "./../../graphql/types/generated-types";
import {useResult} from "@vue/apollo-composable";

export const useProductLoader = (handle: ProductByHandleQueryVariables["handle"] | undefined /*props: ProductByHandleQueryVariables*/) => {
    const Handle = ref(handle) ///ref withh control

    return {}
}
export default useProductLoader
