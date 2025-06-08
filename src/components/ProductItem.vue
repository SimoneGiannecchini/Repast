<template>
  <b-card
    v-if="product"
    :title="product.nome"
    :img-src="product.immagine || 'https://via.placeholder.com/400x300?text=Immagine+non+disponibile'"
    :img-alt="product.nome"
    img-top
    class="h-100 shadow-sm"
    @click="$emit('select', product)"
    style="cursor: pointer"
  >
    <p v-if="typeof product.prezzo === 'number'" class="mb-0 fw-bold text-success">
      € {{ product.prezzo.toFixed(2) }}
    </p>
  </b-card>
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
}
</script>

