import Vuex from 'vuex'
import checkoutUrls from '~/data/checkouts.json'

export default () => {
	return new Vuex.Store({
		state: () => ({
				checkout: checkoutUrls.monthly.normal
		}),
		mutations: {
			affiliate(state) {
				state.checkout = checkoutUrls.affiliates.clarific.monthly.normal
			}
		}
	})
}
