<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="user.firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="user.lastName">
          </div>
          <div class="form-group">
            <label for="birthday">Birthday</label>
            <input type="text" id="birthday" v-model="user.birthday" placeholder="yyyy-mm-dd">
          </div>
          <div class="form-group">
            <label for="regionId">Region Id</label>
            <input type="number" id="regionId" v-model="user.regionId">
          </div>
        </div>
        <div class="row">
          <input type="file" multiple @change="fileChanged($event)">
        </div>
        <div class="row">
          <div class="col-xs-12" formArrayName="travelTimes">
            <label>Travel Times</label>
            <br>
            <button @click.prevent="addTravelTime">Add Travel Time</button>
            <div class="form-group" v-for="(travelTime, i) in user.travelTimes" :key="i">
              <div class="col-xs-8">
                <input type="text" v-model="user.travelTimes[i]">
              </div>
              <div class="col-xs-4">
                <button type="button" class="btn btn-danger" @click.prevent="deleteTravelTime(i)">X</button>
              </div>
            </div>
            <hr>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12" formArrayName="interests">
            <label>Interests</label>
            <br>
            <button @click.prevent="addInterest">Add Interest</button>
            <div class="row" v-for="(interest, i) in user.interests" :key="i">
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
  </div>
</template>

<script>
import requests from './requests'

export default {
  data () {
    return {
      tripImages: null,
      user: {
        firstName: null,
        lastName: null,
        birthday: null,
        regionId: null,
        travelTimes: [],
        interests: []
      }
    }
  },
  methods: {
    fileChanged (event) {
      this.tripImages = event.target.files
    },
    addTravelTime () {
      this.user.travelTimes.push('')
    },
    deleteTravelTime (index) {
      this.user.travelTimes.interests(index, 1)
    },
    addInterest () {
      this.user.interests.push({
        interest: null,
        level: null
      })
    },
    deleteInterest (index) {
      this.user.trip.interests(index, 1)
    },
    onSubmit () {
      requests.addUser(this.user, this.tripImages)
    }
  }
}
</script>
