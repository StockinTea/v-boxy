<template>
  <div
    v-if="visible"
    class="fixed flex justify-center items-center left-0 top-0 right-0 bottom-0 z-50">
    <div
      class="absolute left-0 top-0 bottom-0 right-0 bg-black-005"
      @click.prevent="$emit('close')" />
    <div class="bg-white rounded w-auto h-auto z-50">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  }
}
</script>
