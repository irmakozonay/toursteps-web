import { mapGetters } from 'vuex'

export const constantDataMixin = {
  computed: {
    ...mapGetters('constants', [
      'constantData'
    ]),
    priceText () {
      const currency = this.getCurrency(this.trip.totalBudget.currency)
      return currency + ' ' + this.trip.totalBudget.price
    },
    travelerTypeEmoji () {
      const value = this.getDataType('travelerTypeEmojis', this.trip.travelerType)
      return value == null ? '👣' : value
    },
    travelerTypeText () {
      const value = this.getDataType('travelerTypes', this.trip.travelerType)
      return value == null ? this.trip.travelerType : value
    },
    visitTypeEmoji () {
      const value = this.getDataType('visitTypeEmojis', this.trip.visitType)
      return value == null ? '🛎️' : value
    },
    visitTypeText () {
      const value = this.getDataType('visitTypes', this.trip.visitType)
      return value == null ? this.trip.visitType : value
    },
    paceTypeText () {
      const value = this.getDataType('paceTypes', this.trip.paceType)
      return value == null ? this.trip.paceType : value
    },
    transportationTypeText () {
      const value = this.getDataType('transportationTypes', this.step.localTransportation.transportationType)
      return value == null ? this.step.localTransportation.transportationType : value
    },
    transportationEmoji () {
      const value = this.getDataType('transportationEmojis', this.step.localTransportation.transportationType)
      return value == null ? '📍' : value
    },
    stayPlacesText () {
      let stayPlacesText = ''
      let deliminator = ''
      for (const stayPlaceType of this.trip.stayPlaceTypes) {
        stayPlacesText = stayPlacesText + deliminator + this.getStayPlaceType(stayPlaceType)
        deliminator = ' & '
      }
      return stayPlacesText
    },
    travelTimesText () {
      let travelTimesText = 'Travel times: '
      let deliminator = ''
      for (const travelTime of this.user.travelTimes) {
        travelTimesText = travelTimesText + deliminator + this.getTravelTime(travelTime)
        deliminator = ', '
      }
      return travelTimesText
    },
    visitCountText () {
      switch (this.trip.visitCount) {
        case 1:
          return '1st Visit'
        case 2:
          return '2nd Visit'
        case 3:
          return '3rd Visit'
        default:
          return '3+ Visits'
      }
    }
  },
  methods: {
    getDataType (dataType, subType) {
      const data = this.constantData[dataType]
      if (data == null || data[subType] == null) {
        return null
      }
      return this.constantData[dataType][subType]
    },
    getCurrency (type) {
      const value = this.getDataType('currencies', type)
      return value == null ? type : value
    },
    getStayPlaceType (type) {
      const value = this.getDataType('stayPlaceTypes', type)
      return value == null ? type : value
    },
    getTravelTime (type) {
      const value = this.getDataType('travelTimes', type)
      return value == null ? type : value
    },
    getInterest (type) {
      const value = this.getDataType('interests', type)
      return value == null ? type : value
    },
    getBudgetType (type) {
      const value = this.getDataType('budgetTypes', type)
      return value == null ? type : value
    },
    getStars (stayPlace) {
      let stars = ''
      for (let i = 0; i < stayPlace.starCount; i++) {
        stars = stars + '⭐'
      }
      return stars
    }
  }
}
