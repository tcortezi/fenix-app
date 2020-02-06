import Vuex from 'vuex'

export default () => {
	return new Vuex.Store({
		state: () => ({
				affiliate: null,
				plan: 'normal'
		}),
		mutations: {
			changeAffiliate(state, affiliate) {
				state.affiliate = affiliate
			},
			changePlan(state, plan) {
				state.plan = plan
			}
		}
	})
}
