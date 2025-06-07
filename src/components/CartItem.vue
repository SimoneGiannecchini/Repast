<template>
  <div class="cart-item">
    <img :src="item.immagine" :alt="item.nome" />
    <div class="cart-info">
      <h3>{{ item.nome }}</h3>
      <p>€ {{ item.prezzo.toFixed(2) }}</p>
    </div>
    <!-- aggiunta classe `remove-btn` -->
    <button class="remove-btn" @click="$emit('remove', item)">&#10006;</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: { item: Object }
}
</script>
