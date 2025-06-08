<template>
  <div class="cart-item d-flex align-items-center justify-content-between mb-3 p-2 border rounded shadow-sm">
    <div class="d-flex align-items-center">
      <img
        :src="item.immagine || 'https://via.placeholder.com/60'"
        :alt="item.nome"
        class="me-3"
        style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px"
      />
      <div class="cart-info">
        <h5 class="mb-1">{{ item.nome }}</h5>
        <p class="mb-0 text-muted">€ {{ item.prezzo.toFixed(2) }}</p>
      </div>
    </div>
    <button
      class="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
      @click="$emit('remove', item)"
      style="width: 32px; height: 32px; border-radius: 50%"
    >
      &#10006;
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
