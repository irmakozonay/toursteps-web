<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="tripId">TripId</label>
            <input type="text" id="tripId" v-model="tripId">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12" formArrayName="itinerary">
          <label>Itinerary (Trip days)</label>
          <br>
          <button @click.prevent="addTripDay">Add Trip Day</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tripId: ''
    }
  },
  methods: {
    addTripDay () {

    }
  }
}
</script>
