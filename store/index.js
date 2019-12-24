export const state = ()=>({
        msg: 'msg in store/index.js MODULE',
        brand: 'Toyota',
        model: 'Land Cruiser',
        spec: {
            engine: 'petrol',
            gearbox: 'automatic',
            acceleration: 6,
            displacement: 5.7,
            turbo: 'no'    
        },
        introduction: 'The Toyota Land Cruiser is a japanesse car that we car very little about',
        history: 'When the imperial army took over mainland china we got a war to happen'
})

export const mutations = {
    reset_msg(state,arg){
        state.msg = arg
    }
}

export const getters = {
    capital_brand(state){
        return state.brand.toUpperCase()
    }
}