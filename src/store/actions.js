export default {
  saveUserName (context, payload) {
    context.commit('saveUserName', payload.username)
  },
  saveCartCount (context, payload) {
    context.commit('saveCartCount', payload.cartcount)
  }
}
