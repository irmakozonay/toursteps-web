<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <button @click.prevent="addRegion()">Add Region</button>
      <div class="row">
        <div class="col-xs-12">
          <div class="row" v-for="(region, i) in regions" :key="i">
            <div class="col-xs-5">
              <label>Region Name</label>
              <input type="text" v-model="region.name">
            </div>
            <div class="col-xs-5">
              <div>
                <label>Country Name</label>
                <input type="text" v-model="region.country.name">
              </div>
            </div>
            <div class="col-xs-2">
              <button type="button" class="btn btn-danger" @click.prevent="deleteRegion(i)">X</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import requests from './requests.js'

export default {
  data () {
    return {
      regions: []
    }
  },
  methods: {
    addRegion () {
      this.regions.push({
        name: null,
        country: {
          name: null
        }
      })
    },
    deleteRegion (index) {
      this.regions.splice(index, 1)
    },
    onSubmit () {
      requests.addRegions(this.regions)
    }
  }
}
</script>
