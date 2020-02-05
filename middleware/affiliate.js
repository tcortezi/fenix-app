export default function({ query, store }) {
	if(query.marketing === 'clarific') {
		store.commit('trigger')
	}
}
