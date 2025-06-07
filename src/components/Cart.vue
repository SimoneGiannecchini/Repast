<template>
  <div class="cart-container">
    <h1>Carrello</h1>
    <div v-if="!items.length" class="empty-container">
  <p class="empty-message">Il carrello è vuoto.</p>
</div>

    <div v-else>
      <CartItem
        v-for="(i, idx) in items"
        :key="idx"
        :item="i"
        @remove="remove(i)"
      />
      <div class="cart-summary">
        <p>Totale parziale: € {{ gross.toFixed(2) }}</p>
        <p v-if="items.length >= 3" class="discount">Sconto 10% applicato!</p>
        <p><strong>Totale da pagare: € {{ total.toFixed(2) }}</strong></p>
        <div class="buttons">
          <button class="checkout" @click="goBack">Torna al catalogo</button>
          <button class="checkout" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import "../assets/cart.css";

export default {
  name: "Cart",
  components: { CartItem },
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
    // somma senza sconto
    gross() {
      return this.items.reduce((sum, i) => sum + i.prezzo, 0);
    },
    // Sconto 10% se 3 o più prodotti
    total() {
      return this.items.length >= 3
        ? this.gross * 0.9
        : this.gross;
    }
  },
  methods: {
    remove(item) {
      this.$store.commit("cart/removeFromCart", item);
    },
    checkout() {
      const hasDisc = this.items.length >= 3;
      let msg = "Ordine completato!\n";
      if (hasDisc) msg += "Hai ricevuto uno sconto del 10%.\n";
      msg += `Totale da pagare: € ${this.total.toFixed(2)}`;
      alert(msg);
      this.$store.commit("cart/clearCart");
      this.$router.push({ name: "Home" });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped src="../assets/cart.css"></style>
