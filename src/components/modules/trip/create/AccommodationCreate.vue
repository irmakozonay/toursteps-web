<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="form-group">
            <label for="tripId">Trip Id</label>
            <input type="text" id="tripId" v-model="tripId">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button type="button" @click.prevent="addAccommodation">Add Accommodation</button>
            <div class="row" v-for="(accommodation,i) in accommodations" :key="i">
              <div>
                <label>Accommodation</label>
                <div class="col-xs-12">
                  <div class="form-group col-xs-3">
                    <label for="price">Price</label>
                    <input type="number" id="price" v-model="accommodation.price">
                  </div>
                  <div class="form-group col-xs-3">
                    <label for="currency">Currency</label>
                    <input type="text" id="currency" v-model="accommodation.currency">
                  </div>
                  <div class="form-group col-xs-3">
                    <label for="checkInDate">Check In Date</label>
                    <input
                      type="text"
                      id="checkInDate"
                      v-model="accommodation.checkInDate"
                      placeholder="yyyy-mm-dd"
                    >
                  </div>
                  <div class="form-group col-xs-3">
                    <label for="checkOutDate">Check Out Date</label>
                    <input
                      type="text"
                      id="checkOutDate"
                      v-model="accommodation.checkOutDate"
                      placeholder="yyyy-mm-dd"
                    >
                  </div>
                </div>
              </div>

              <div>
                <label>Stay Place</label>
                <div class="col-xs-12">
                  <div class="col-xs-3">
                    <label for="googleId">Google Id</label>
                    <input type="text" id="googleId" v-model="accommodation.stayPlace.googleId">
                  </div>
                  <div class="col-xs-3">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="accommodation.stayPlace.name">
                  </div>
                  <div class="col-xs-1">
                    <label for="type">Type</label>
                    <input type="text" id="type" v-model="accommodation.stayPlace.type">
                  </div>
                  <div class="col-xs-2">
                    <label for="url">Url</label>
                    <input type="text" id="url" v-model="accommodation.stayPlace.url">
                  </div>
                  <div class="col-xs-1">
                    <label for="starCount">Star Count</label>
                    <input type="number" id="starCount" v-model="accommodation.stayPlace.starCount">
                  </div>
                  <div class="col-xs-1">
                    <label for="rating">Rating</label>
                    <input type="number" id="rating" v-model="accommodation.stayPlace.rating">
                  </div>
                  <div class="col-xs-1">
                    <label for="locationRating">Location Rating</label>
                    <input type="number" id="locationRating" v-model="accommodation.stayPlace.locationRating">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <button class="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import requests from './requests.js'

export default {
  data () {
    return {
      tripId: '',
      accommodations: []
    }
  },
  methods: {
    addAccommodation () {
      this.accommodations.push({
        price: null,
        currency: null,
        checkInDate: null,
        checkOutDate: null,
        stayPlace: {
          googleId: null,
          name: null,
          type: null,
          url: null,
          starCount: null,
          rating: null,
          locationRating: null
        }
      })
    },
    onSubmit () {
      requests.addAccommodations(this.tripId, this.accommodations)
    }
  }
}
</script>
