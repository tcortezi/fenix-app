import Vuex from 'vuex'
import Url from 'url'

const monetizze = 'https://app.monetizze.com.br'

export default () => {
	return new Vuex.Store({
		state: () => ({
				checkout: Url.resolve(monetizze, 'checkout/DVU70153'),
				triggerAffiliate: false
		}),
		mutations: {
			affiliate(state) {
				state.checkout = Url.resolve(monetizze, 'r/AAT7717077?u=c&pl=VU70153')
			},
			trigger(state) {
				state.triggerAffiliate = true
			}
		}
	})
}
