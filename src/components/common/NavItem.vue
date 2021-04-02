<template>
  <li>
    <a
      :href="href"
      :class="[
        'block px-4 py-2 rounded-md',
        { 'bg-amber-100 text-amber-700': isActive },
      ]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    href: String,
    isActive: Boolean,
  },
})
export default class NavItem extends Vue {}
</script>