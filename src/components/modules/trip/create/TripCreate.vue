<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="trip.title">
        </div>
        <div class="form-group">
          <label for="userId">UserId</label>
          <input type="text" id="userId" v-model="trip.userId">
        </div>
        <div class="form-group">
          <label for="travelerCount">Traveler Count</label>
          <input type="number" id="travelerCount" v-model="trip.travelerCount">
        </div>
        <div class="form-group">
          <label for="travelerType">Traveler Type</label>
          <input type="text" id="travelerType" v-model="trip.travelerType">
        </div>
        <div class="form-group">
          <label for="visitType">Visit Type</label>
          <input type="text" id="visitType" v-model="trip.visitType">
        </div>
        <div class="form-group">
          <label for="visitCount">Visit Count</label>
          <input type="number" id="visitCount" v-model="trip.visitCount">
        </div>
        <div class="form-group">
          <label for="paceType">Pace Type</label>
          <input type="text" id="paceType" v-model="trip.paceType">
        </div>
        <div class="form-group">
          <label for="startDate">Start Date</label>
          <input type="text" id="startDate" v-model="trip.startDate" placeholder="yyyy-mm-dd">
        </div>
        <div class="form-group">
          <label for="endDate">End Date</label>
          <input type="text" id="endDate" v-model="trip.endDate" placeholder="yyyy-mm-dd">
        </div>
        <div class="form-group">
          <label for="bookDate">Book Date</label>
          <input type="text" id="bookDate" v-model="trip.bookDate" placeholder="yyyy-mm-dd">
        </div>

        <input type="file" multiple @change="fileChanged($event)">
      </div>
      <div class="row">
        <div class="col-xs-12">
          <label>Regions</label>
          <br>
          <button @click.prevent="addRegion">Add Region</button>
          <div class="row" v-for="(region, i) in trip.regions" :key="i">
            <div class="col-xs-8">
              <label for="regionId">Region Id</label>
              <input type="number" id="regionId" v-model="region.regionId">
            </div>
            <div class="col-xs-2">
              <label for="dayCount">Day Count</label>
              <input type="number" id="dayCount" v-model="region.dayCount">
            </div>
            <div class="col-xs-2">
              <button type="button" class="btn btn-danger" @click.prevent="deleteRegion(i)">X</button>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <label>Interests</label>
          <br>
          <button @click.prevent="addInterest">Add Interest</button>
          <div class="row" v-for="(interest, i) in trip.interests" :key="i">
            <div class="col-xs-8">
              <label for="interest">Name</label>
              <input type="text" id="interest" v-model="interest.interest">
            </div>
            <div class="col-xs-2">
              <label for="level">Level</label>
              <input type="number" id="level" v-model="interest.level">
            </div>
            <div class="col-xs-2">
              <button type="button" class="btn btn-danger" @click.prevent="deleteInterest(i)">X</button>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// import requests from './requests.js'

export default {
  data () {
    return {
      tripImages: null,
      trip: {
        title: null,
        userId: null,
        travelerCount: null,
        travelerType: null,
        visitType: null,
        visitCount: null,
        paceType: null,
        startDate: null,
        endDate: null,
        bookDate: null,
        regions: [],
        interests: []
      }
    }
  },
  methods: {
    fileChanged (event) {
      this.tripImages = event.target.files
    },
    addRegion () {
      this.trip.regions.push({
        regionId: null,
        dayCount: null
      })
    },
    deleteRegion (index) {
      this.trip.regions.splice(index, 1)
    },
    addInterest () {
      this.trip.interests.push({
        interest: null,
        level: null
      })
    },
    deleteInterest (index) {
      this.trip.interests.splice(index, 1)
    },
    onSubmit () {
      console.log('send ' + this.tripImages)
      // requests.addTrip(this.trip, this.tripImages)
    }
  }
}
</script>
