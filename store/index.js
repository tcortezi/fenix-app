import Vuex from 'vuex'

export default () => {
	return new Vuex.Store({
		state: () => ({
				affiliate: null
		}),
		mutations: {
			changeAffiliate(state, affiliate) {
				state.affiliate = affiliate
			}
		}
	})
}
