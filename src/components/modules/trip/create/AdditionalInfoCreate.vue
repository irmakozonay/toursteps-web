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
            <label>Info</label>
            <br>
            <button @click.prevent="addInfo">Add Info</button>
            <div class="row" v-for="(info, i) in infos" :key="i">
              <div class="col-xs-2">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="info.name">
              </div>
              <div class="col-xs-8">
                <label for="description">Description</label>
                <input type="text" id="description" v-model="info.description">
              </div>
              <div class="col-xs-2">
                <button type="button" class="btn btn-danger" @click.prevent="deleteInfo(i)">X</button>
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
import requests from './requests.js'

export default {
  data () {
    return {
      tripId: '',
      infos: []
    }
  },
  methods: {
    addInfo () {
      this.infos.push({
        name: null,
        description: null
      })
    },
    deleteInfo (index) {
      this.infos.splice(index, 1)
    },
    onSubmit () {
      requests.addAdditionalInfo(this.tripId, this.infos)
    }
  }
}
</script>
