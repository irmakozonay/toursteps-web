<template>
  <b-container>
    <b-form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="tripId">TripId</label>
            <b-form-input type="text" id="tripId" v-model="tripId"></b-form-input>
          </div>
        </div>
      </div>
      <div>
        <div class="col-md-12">
          <label>Itinerary (Trip days)</label>
          <br>
          <b-button @click.prevent="addTripDay">Add Trip Day</b-button>
          <br>
          <br>
          <div v-for="(tripDay, tripDayIndex) in itinerary" :key="tripDayIndex">
            <div class="col-md-12 row">
              <div class="col-md-5">
                <label for="tripDayTitle">Trip Day Title</label>
                <b-form-input type="text" id="tripDayTitle" v-model="tripDay.title"></b-form-input>
              </div>
              <div class="col-md-6">
                <label for="dayCount">Day No</label>
                <b-form-input type="number" id="dayCount" v-model="tripDay.day"></b-form-input>
              </div>
              <div class="col-md-1">
                <label>Day</label>
                <b-button variant="danger" @click.prevent="deleteTripDay(tripDayIndex)">X</b-button>
              </div>
            </div>

            <div>
              <div formArrayName="dayParts">
                <label>Day Parts</label><br>
                <b-button @click.prevent="addDayPart(tripDayIndex)">Add Day Part</b-button>
                <br>
                <br>
                <div v-for="(dayPart, dayPartIndex) in tripDay.dayParts" :key="dayPartIndex">
                  <div class="row">
                    <div class="col-md-2">
                      <label>Day Part Title</label>
                      <b-form-input type="text" v-model="dayPart.title"></b-form-input>
                    </div>
                    <div class="col-md-7">
                      <label for="description">Description</label>
                      <b-form-input type="text" id="description"  v-model="dayPart.description"></b-form-input>
                    </div>
                    <div class="col-md-2">
                      <label for="stayPlaceId">Stay Place Id</label>
                      <b-form-input type="number" id="stayPlaceId" v-model="dayPart.stayPlaceId"></b-form-input>
                    </div>
                    <div class="col-md-1">
                      <label>Part</label>
                      <b-button variant="danger" @click.prevent="deleteDayPart(tripDayIndex, dayPartIndex)">X</b-button>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div v-for="(step, stepIndex) in dayPart.steps" :key="stepIndex">
                      <br>
                      <div class="row">
                        <div v-if="step.type == 'stay_place'" class="col-md-1">
                          <label for="typeId">Type Id</label>
                          <b-form-input type="text" id="typeId" v-model="step.typeId"></b-form-input>
                        </div>
                        <div class="col-md-2">
                          <label>Type</label>
                          <b-form-input type="text" id="type" v-model="step.type"></b-form-input>
                        </div>
                        <div class="col-md-5">
                          <label for="note">Note</label>
                          <b-form-input type="text" id="note" v-model="step.note"></b-form-input>
                        </div>
                        <div class="col-md-1">
                          <label for="duration">Duration</label>
                          <b-form-input type="number" id="duration" v-model="step.duration"></b-form-input>
                        </div>
                        <div class="col-md-1">
                          <label for="price">Price</label>
                          <b-form-input type="number" id="price" v-model="step.price"></b-form-input>
                        </div>
                        <div class="col-md-1">
                          <label for="currency">Currency</label>
                          <b-form-input type="text" id="currency" v-model="step.currency"></b-form-input>
                        </div>
                        <div class="col-md-1">
                          <label>Step</label>
                          <b-button variant="danger" @click.prevent="deleteStep(tripDayIndex, dayPartIndex, stepIndex)">X</b-button>
                        </div>
                      </div>

                      <div v-if="step.type == 'local_transportation'" class="col-md-12 row">
                        <div class="col-xs-5">
                          <label for="transportationType">Transportation Type</label>
                          <b-form-input type="text" id="transportationType" v-model="step.localTransportation.transportationType"></b-form-input>
                        </div>
                        <div class="col-xs-5">
                          <label for="destination">Destination</label>
                          <b-form-input type="text" id="destination" v-model="step.localTransportation.destination"></b-form-input>
                        </div>
                        <div class="col-xs-2">
                          <label for="vehicleName">Vehicle Name</label>
                          <b-form-input type="text" id="vehicleName" v-model="step.localTransportation.vehicleName"></b-form-input>
                        </div>
                      </div>

                      <div v-if="step.type == 'place'" class="col-md-12 row">
                        <div class="col-md-6">
                          <label for="googleId">Google Id</label>
                          <b-form-input type="text" id="googleId" v-model="step.place.googleId"></b-form-input>
                        </div>
                        <div class="col-md-6">
                          <label for="name">Name</label>
                          <b-form-input type="text" id="name" v-model="step.place.name"></b-form-input>
                        </div>
                      </div>

                    </div>

                    <br>
                    <label>Add Step:</label>
                    <b-button variant="outline-secondary" @click.prevent="addStep(tripDayIndex, dayPartIndex, 'local_transportation')">Add Local Transportation</b-button>
                    <b-button variant="outline-secondary" @click.prevent="addStep(tripDayIndex, dayPartIndex, 'place')">Add Place</b-button>
                    <b-button variant="outline-secondary" @click.prevent="addStep(tripDayIndex, dayPartIndex, 'note')">Add Note</b-button>
                    <b-button variant="outline-secondary" @click.prevent="addStep(tripDayIndex, dayPartIndex, 'stay_place')">Add Stay Place</b-button>
                    <b-button variant="outline-secondary" @click.prevent="addStep(tripDayIndex, dayPartIndex, 'note')">Add Global Transportation</b-button>
                  </div>
                  <hr>
                </div>
              </div>
              <br>
            </div>

          </div>
        </div>
      </div>
      <div class="row">
        <b-button variant="success" type="submit">Submit</b-button>
      </div>
    </b-form>
  </b-container>
</template>

<script>
import requests from './requests.js'

export default {
  data () {
    return {
      tripId: '',
      itinerary: []
    }
  },
  methods: {
    addTripDay () {
      this.itinerary.push({
        title: null,
        day: null,
        dayParts: []
      })
    },
    addDayPart (tripDayIndex) {
      this.itinerary[tripDayIndex].dayParts.push({
        title: null,
        description: null,
        stayPlaceId: null,
        steps: []
      })
    },
    addStep (tripDayIndex, dayPartIndex, type) {
      var object = {
        type: type,
        note: null,
        duration: null,
        price: null,
        currency: null
      }
      if (type === 'local_transportation') {
        object = {
          type: type,
          note: null,
          duration: null,
          price: null,
          currency: null,
          localTransportation: {
            transportationType: null,
            destination: null,
            vehicleName: null
          }
        }
      } else if (type === 'stay_place') {
        object = {
          typeId: null,
          type: type,
          note: null,
          duration: null,
          price: null,
          currency: null
        }
      } else if (type === 'place') {
        object = {
          type: type,
          note: null,
          duration: null,
          price: null,
          currency: null,
          place: {
            googleId: null,
            name: null
          }
        }
      }
      this.itinerary[tripDayIndex].dayParts[dayPartIndex].steps.push(object)
    },
    deleteTripDay (tripDayIndex) {
      this.itinerary.splice(tripDayIndex, 1)
    },
    deleteDayPart (tripDayIndex, dayPartIndex) {
      this.itinerary[tripDayIndex].dayParts.splice(dayPartIndex, 1)
    },
    deleteStep (tripDayIndex, dayPartIndex, stepIndex) {
      this.itinerary[tripDayIndex].dayParts[dayPartIndex].steps.splice(stepIndex, 1)
    },
    onSubmit () {
      console.log('abaasldk')
      requests.addItinerary(this.tripId, this.itinerary)
    }
  }
}
</script>
