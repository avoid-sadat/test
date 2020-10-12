export default {
    state: {
        count: 45,
        data:"hi"
    },

    getters: {
        test(state){
            return state.data;
        }

    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
}
