import emitter from '@/utils/emitter'
import eventBus from "@/utils/event-bus"

export default {
  mixins: [emitter],
  created() {},
  methods: {
    editEventHandler(eventName, eventParams) {
      console.log('editEventHandler',eventName, eventParams)
      this.dispatch('SettingPanel', 'editEventHandler', [eventName, [...eventParams]])
    },

  }
}
