<template>
  <div class="container">
    <div class="your-destinations">
      <div class="your-destinations__top">
        <div class="title">
          <h2>Destinations</h2>
        </div>
      </div>
      <div class="destination-list__content">
        <app-trip-row v-for="trip in trips" :key="trip.id" :trip="trip"></app-trip-row>
      </div>
    </div>
  </div>
</template>

<script>
import TripRow from './TripRow.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    appTripRow: TripRow
  },
  computed: {
    ...mapGetters('trips', [
      'trips'
    ])
  },
  methods: {
    ...mapActions('trips', [
      'getHome'
    ]),
    ...mapActions('constants', [
      'getConstantData'
    ])
  },
  created () {
    this.getConstantData()
    this.getHome()
  }
}
</script>

<style lang="scss" scoped>
.your-destinations {
  .your-destinations__top {
    overflow: hidden;
    margin-bottom: 20px;
    margin-top: 38px;
  }
  .title {
    float: left;
    h2 {
      font-weight: 400;
      font-size: 24px;
      color: #444;
      margin: 0;
    }
  }
}
.destination-list__content {
  width: 100%;
}
</style>
