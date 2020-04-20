import Notify from './components/Notify.vue'
import Confirm from './components/Confirm.vue'

const PopupPlugin = {
  install(Vue, option) {
    Object.defineProperties(Vue.prototype, {
      $notify: {
        get() {
          return function(title = '', options = {}) {
            const instanceData = Object.assign({}, {
              confirmText: Object.prototype.hasOwnProperty.call(options, 'confirmText') ? options.confirmText : 'OK',
              description: Object.prototype.hasOwnProperty.call(options, 'description') ? options.description : '',
              type: Object.prototype.hasOwnProperty.call(options, 'type') ? options.type : '',
              title: title
            })
            const instance = (() => {
              const NotifyConstructor = Vue.extend(Notify)
              const node = document.createElement('div')
              document.querySelector('body').appendChild(node)

              const Vm = new NotifyConstructor({
                data: instanceData
              })
              return Vm.$mount(node)
            })()
            return instance
          }
        }
      },
      $confirm: {
        get() {
          return function(title = '', options = {}) {
            const instanceData = Object.assign({}, {
              cancelText: Object.prototype.hasOwnProperty.call(options, 'cancelText') ? options.cancelText : 'Cancel',
              confirmText: Object.prototype.hasOwnProperty.call(options, 'confirmText') ? options.confirmText : 'Confirm',
              description: Object.prototype.hasOwnProperty.call(options, 'description') ? options.description : '',
              type: Object.prototype.hasOwnProperty.call(options, 'type') ? options.type : '',
              title: title
            })
            const instance = (() => {
              const ConfirmConstructor = Vue.extend(Confirm)
              const node = document.createElement('div')
              document.querySelector('body').appendChild(node)

              const Vm = new ConfirmConstructor({
                data: instanceData
              })

              return Vm.$mount(node)
            })()

            return instance.handleConfirm()
          }
        }
      }
    })
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PopupPlugin)
}

export default PopupPlugin
