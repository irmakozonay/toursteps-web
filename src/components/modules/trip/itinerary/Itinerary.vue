<template>
  <div>
    <app-map v-show="dayMapsPlaces" :mapsPlaces="dayMapsPlaces"></app-map>
    <div role="tablist" class="itinerary-element">
      <b-card v-for="(dayTitle, i) in trip.dayTitles" :key="i" no-body class="mb-1" @click="dayOpened(i + 1)">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'accordion-' + i" variant="info">Day {{i + 1}}: {{dayTitle}}</b-button>
        </b-card-header>
        <b-collapse :id="'accordion-' + i" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <div class="itinerary-day" v-if="trip.itinerary != null && trip.itinerary[(i + 1)] != null">
              <div v-for="dayPart in tripDay(i).dayParts" :key="dayPart.id">
                <p class="day-title">{{dayPart.title}}</p>
                <p v-if="dayPart.stayPlace">
                  <span class="day-accommodation">Accommodation:</span> <br> {{dayPart.stayPlace.mapsPlace.name}}
                </p>
                <p v-if="dayPart.description">{{dayPart.description}}</p>
                <ul>
                  <app-step v-for="step in dayPart.steps" :key="step.id" :step="step"></app-step>
                </ul>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Step from './Step'
import Map from './Map'

export default {
  data () {
    return {
      tripId: this.$route.params.url.split('Guide-')[1],
      selectedDay: null
    }
  },
  components: {
    appStep: Step,
    appMap: Map
  },
  computed: {
    ...mapGetters('trip', ['trip']),
    dayMapsPlaces () {
      let mapPlaces = null
      if (this.trip.itinerary != null && this.trip.itinerary[this.selectedDay] != null) {
        mapPlaces = []
        const tripDay = this.trip.itinerary[this.selectedDay]
        for (const dayPart of tripDay.dayParts) {
          for (const step of dayPart.steps) {
            let mapsPlace = null
            if (step.place != null) {
              mapsPlace = step.place.mapsPlace
            } else if (step.stayPlace != null) {
              mapsPlace = step.stayPlace.mapsPlace
            }
            if (mapsPlace != null) {
              mapPlaces.push(mapsPlace)
            }
          }
        }
      }
      return mapPlaces
    }
  },
  methods: {
    ...mapActions('trip', ['getTripDay']),
    dayOpened (day) {
      this.selectedDay = day
      if (this.trip.itinerary == null || this.trip.itinerary[day] == null) {
        this.getTripDay({ tripId: this.tripId, day: day })
      }
    },
    tripDay (i) {
      return this.trip.itinerary[(i + 1)]
    }
  }
}
</script>

<style lang="scss" scoped>
.itinerary-element{
  margin: 0 10px;
  width: 100%;
}
.day-title {
  font-size: 15px;
  font-weight: bold;
}

.itinerary-day {
  font-size: 14px;
}

.day-accommodation {
  text-decoration: underline;
}
</style>
