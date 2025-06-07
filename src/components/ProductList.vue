<template>
  <div class="product-list-container">
    <h1 class="title">Prodotti</h1>
    <p v-if="loading">Caricamento prodotti...</p>
    <div v-else class="product-list">
      <ProductItem
        v-for="p in products"
        :key="p.nome"
        :product="p"
        @select="goToProduct"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import '../assets/product-list.css';

export default {
  name: "ProductList",
  components: { ProductItem },
  data() {
    return {
      products: [],
      loading: true
    };
  },
  mounted() {
    fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json')
      .then(r => r.json())
      .then(data => {
        // mapping dei campi, se l'API usa nomi diversi
        this.products = data.map(item => ({
          nome:        item.nome        ?? item.name,
          prezzo:      item.prezzo      ?? item.price,
          immagine:    item.immagine    ?? item.image,
          descrizione: item.descrizione ?? item.description
        }));
      })
      .catch(err => console.error('Fetch error:', err))
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    goToProduct(product) {
      const nomeEnc = encodeURIComponent(product.nome);
      this.$router.push({ name: 'ProductDetail', params: { nome: nomeEnc } });
    }
  }
};
</script>
