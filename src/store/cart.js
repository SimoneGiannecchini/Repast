export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    addToCart(state, product) {
      state.items.push(product)
    },
    removeFromCart(state, product) {
      const i = state.items.findIndex(p => p.nome === product.nome)
      if (i !== -1) state.items.splice(i, 1)
    },
    clearCart(state) {
      state.items = []
    }
  }
}

