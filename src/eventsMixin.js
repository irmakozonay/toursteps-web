export const eventsMixin = {
  methods: {
    trackClick (category, label) {
      this.$ga.event({
        eventCategory: category,
        eventAction: 'click',
        eventLabel: label
      })
    }
  }
}
