import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: ()=>  {
        return { count: 0 }
    },
    persist: {
        key: 'storekey',
        storage: window.sessionStorage,
        beforeRestore: (context) => {
            console.log('Before hydration...',context)
        },
        afterRestore: (context) => {
            console.log('After hydration...',context)
        },    // could also be defined as
    },
    // state: () => ({ count: 0 })
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

export default useCounterStore
