<template>
  <b-container class="mt-4">
    <h1 class="text-center mb-4">Prodotti</h1>
    
    <p v-if="loading" class="text-center">Caricamento prodotti...</p>
    
    <b-row v-else>
      <b-col
        v-for="p in products"
        :key="p.nome"
        cols="12"
        sm="6"
        lg="4"
        class="mb-4"
      >
        <ProductItem
          :product="p"
          @select="goToProduct"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: "ProductList",
  components: { ProductItem },
  data() {
    return {
      products: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json')
      .then(r => r.json())
      .then(data => {
        this.products = data.map(item => ({
          nome: item.name,
          prezzo: item.price,
          immagine: item.image,
          descrizione: item.description
        }))
      })
      .catch(err => console.error('Fetch error:', err))
      .finally(() => {
        this.loading = false
      })
  },
  methods: {
    goToProduct(product) {
      const nomeEnc = encodeURIComponent(product.nome)
      this.$router.push({ name: 'ProductDetail', params: { nome: nomeEnc } })
    }
  }
}
</script>
