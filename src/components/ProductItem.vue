<template>
  <div v-if="product" class="product-card" @click="$emit('select', product)">
    <img :src="product.immagine" :alt="product.nome" />
    <div class="product-info">
      <h2>{{ product.nome }}</h2>
      <p v-if="typeof product.prezzo==='number'">€ {{ product.prezzo.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
