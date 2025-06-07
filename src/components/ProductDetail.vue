<template>
  <div v-if="product" class="product-detail">
    <img :src="product.immagine" :alt="product.nome" />
    <h2>{{ product.nome }}</h2>
    <p class="price">€ {{ product.prezzo.toFixed(2) }}</p>
    <p class="desc">{{ product.descrizione }}</p>

    <div class="buttons">
      <button class="add-btn" @click="addToCart">
        Aggiungi al carrello
      </button>
      <button class="back-btn" @click="goBack">
        Torna al catalogo
      </button>
    </div>
  </div>

  <div v-else class="loading">
    <p>Caricamento prodotto...</p>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: ["nome"],
  data() {
    return {
      product: null,
      loading: true
    };
  },
  mounted() {
    const nomeParam = decodeURIComponent(this.nome).trim().toLowerCase();
    fetch("https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json")
      .then(r => r.json())
      .then(data => {
        const mapped = data.map(p => ({
          nome:        p.nome        ?? p.name,
          prezzo:      p.prezzo      ?? p.price,
          immagine:    p.immagine    ?? p.image,
          descrizione: p.descrizione ?? p.description
        }));
        this.product = mapped.find(
          x => x.nome.trim().toLowerCase() === nomeParam
        );
      })
      .catch(err => console.error("Errore fetch dettaglio:", err))
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    addToCart() {
      this.$store.commit("cart/addToCart", this.product);
      this.$router.push({ name: "Cart" });
    },
    goBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped src="../assets/product-detail.css"></style>
