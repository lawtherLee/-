<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed, toRefs } from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});
const { iconClass } = toRefs(props);
const symbolId = computed(() => `#icon-${iconClass.value}`);
const svgClass = computed(() => `svg-icon icon-${iconClass.value}`);
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
}
</style>
