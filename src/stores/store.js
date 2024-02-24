import { defineStore } from 'pinia'


export const useStore = defineStore('store', {
    state: () => ({
        count:0
    }),

    actions:{
        exampleAction(n){
            this.count = this.count + n
        },
    }

})
