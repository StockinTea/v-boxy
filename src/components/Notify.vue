<template>
  <popup :visible="visible">
    <div class="flex flex-col justify-between w-100">
      <div class="p-4 flex flex-col items-center">
        <div
          v-if="icon !== ''"
          class="flex justify-center items-center rounded-full overflow-hidden my-2 w-12 h-12 bg-red-001">
          <icon
            :name="icon"
            class="w-12 h-12" />
        </div>
        <div
          v-if="title"
          class="flex flex-row text-gray-008 text-2xl text-center font-medium">
          {{ title }}
        </div>
        <div class="mb-3 mt-2 max-w-100 inline text-base text-gray-006 truncate leading-none">
          {{ description }}
        </div>
      </div>
      <div class="flex flex-row w-full h-14 border-t border-gray-003 justify-center">
        <v-button
          shape="text"
          @click="onClickAction()">
          {{ confirmText }}
        </v-button>
      </div>
    </div>
  </popup>
</template>
<script>
import Popup from './Popup.vue'

export default {
  name: 'Notify',
  components: {
    Popup
  },
  data() {
    return {
      visible: true,
      confirmText: 'OK',
      description: '',
      title: '',
      type: '',
      handlePromise: null
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case 'success':
          return 'lightbox-success'
        case 'alert':
          return 'lightbox-alert'
        default:
          return ''
      }
    }
  },
  methods: {
    handleNotify() {
      this.visible = true
      return new Promise((resolve, reject) => {
        this.handlePromise = { resolve, reject }
      })
    },
    onClickAction() {
      this.visible = false
      this.handlePromise && this.handlePromise.resolve()
      this.$nextTick(this.$destroy)
    }
  }
}
</script>
