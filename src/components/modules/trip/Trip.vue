<template>
  <section class="product-detail">
    <div class="container" v-if="trip">
      <div class="row">
        <div class="col-md-12">
          <div class="product-detail__info">
            <div class="product-title">
              <h2>{{trip.title}}</h2>
            </div>
            <app-user-info v-if="trip.user" :user="trip.user"></app-user-info>
            <h4>Trip Details</h4>
            <p v-if="trip.description">{{trip.description}}</p>
            <app-trip-details :trip="trip"></app-trip-details>
          </div>
        </div>
        <div class="col-md-6">
          <!--<app-image-gallery></app-image-gallery>-->
        </div>
      </div>
      <div id="travelsteps">
        <div class="col-md-12">
          <ul class="nav nav-tabs">
            <li class="col-md-3 nav-item" @click="trackClick('tab_change', 'Itinerary')">
              <router-link :to="{ name: 'Itinerary' }" tag="li" class="nav-link" active-class="active" exact>Itinerary</router-link>
            </li>
            <li class="col-md-3 nav-item" @click="trackClick('tab_change', 'Accommodation')">
              <router-link :to="{ name: 'AccommodationTransportation' }" tag="li" class="nav-link" active-class="active">Accommodation</router-link>
            </li>
            <li class="col-md-3 nav-item" @click="trackClick('tab_change', 'Budget')">
              <router-link :to="{ name: 'Budget' }" tag="li" class="nav-link" active-class="active">Budget</router-link>
            </li>
            <li class="col-md-3 nav-item" @click="trackClick('tab_change', 'Good to know')">
              <router-link :to="{ name: 'AdditionalInfo' }" tag="li" class="nav-link" active-class="active">Good to Know</router-link>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>
          </div>
          <div class="other-steps">
            <a class="awe-btn awe-btn-style4">SEE THE OTHER TRAVEL STEPS</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserInfo from '../user/UserInfo.vue'
import TripDetails from './TripDetails.vue'
import { mapActions, mapGetters } from 'vuex'
import { eventsMixin } from '../../../eventsMixin.js'

export default {
  data () {
    return {
      tripId: this.$route.params.url.split('Guide-')[1]
    }
  },
  computed: {
    ...mapGetters('trip', [
      'trip'
    ])
  },
  methods: {
    ...mapActions('constants', [
      'getConstantData'
    ]),
    ...mapActions('trip', [
      'getTrip'
    ])
  },
  components: {
    appUserInfo: UserInfo,
    appTripDetails: TripDetails
  },
  created () {
    this.getConstantData()
    this.getTrip(this.tripId)
  },
  mixins: [eventsMixin]
}
</script>

<style lang="scss" scoped>
$color: #0091ea !default;

.other-steps {
  text-align: center;
  a {
    margin: 20px;
  }
}

.nav-tabs {
  li {
    height: 62px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    .active {
      color: $color;
    }
  }
}

.product-detail {
  padding-top: 52px;
  padding-bottom: 160px;
}

.product-detail__info {
  .product-title {
    h2 {
      display: inline-block;
      font-size: 32px;
      font-weight: 600;
      color: $color;
      margin: 0;
    }
  }
}
</style>
