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
        <div class="col-xs-12" formArrayName="budget">
          <label>Budget</label>
          <br>
          <button @click.prevent="addBudget">Add Budget</button>
          <div class="row" v-for="(budget, i) in budgets" :key="i">
            <div class="col-xs-2">
              <label for="budgetType">Budget Type</label>
              <input type="text" id="budgetType" v-model="budget.budgetType">
            </div>
            <div class="col-xs-8">
              <label for="price">Price</label>
              <input type="number" id="price" v-model="budget.price">
            </div>
            <div class="col-xs-1">
              <label for="currency">Currency</label>
              <input type="text" id="currency" v-model="budget.currency">
            </div>
            <div class="col-xs-1">
              <button class="btn btn-danger" @click.prevent="deleteBudget(i)">X</button>
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
import requests from './requests.js'

export default {
  data () {
    return {
      tripId: '',
      budgets: []
    }
  },
  methods: {
    addBudget () {
      this.budgets.push({
        budgetType: null,
        price: null,
        currency: null
      })
    },
    deleteBudget (index) {
      this.budgets.splice(index, 1)
    },
    onSubmit () {
      requests.addBudget(this.tripId, this.budgets)
    }
  }
}
</script>
