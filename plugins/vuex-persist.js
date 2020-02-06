import Vue from 'vue'
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
	window.onNuxtReady(() => {
		new VuexPersistence({
			storage: window.localStorage,
			filter: (mutation) => mutation.type == 'changeAffiliate',
			reducer: (state) => ({ affiliate: state.affiliate })
		}).plugin(store)
	})
}
