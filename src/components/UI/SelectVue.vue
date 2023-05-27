<template>
  <v-select :options="options" :value="value" v-model="selected" />
</template>

<script>
export default {
  name: "VueSelect",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      selected: this.value,
    };
  },
  watch: {
    selected(value) {
      this.$emit("v-select", value);
    },
  },
};
</script>

<style lang="scss">
@import "vue-select/dist/vue-select.css";
</style>
