<template>
  <li :key="currency" class="list-group-item row">
    <div class="col currency-symbol">{{ currency }}</div>
    <div class="col currency-value">{{ value }}</div>
  </li>
</template>

<script>
export default {
  name: "CurrencyItem",
  props: {
    currency: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
