<template>
  <div>
    <div class="budget-total-margin"></div>
    <table>
      <tbody>
        <tr>
          <th>Budget</th>
          <th>{{trip.travelerCount}} person{{trip.travelerCount > 1 ? 's' : ''}}</th>
        </tr>
        <tr>
          <th>Total</th>
          <td>{{priceText}}</td>
        </tr>
      </tbody>
    </table>
    <div class="budget-total-margin"></div>
    <div class="budget-details-title">
      <p>Details</p>
    </div>
    <table>
      <tbody>
        <tr v-for="budgetItem in trip.budget" :key="budgetItem.budgetType">
          <th>{{getBudgetType(budgetItem.budgetType)}}</th>
          <td>{{getCurrency(budgetItem.currency)}} {{budgetItem.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { constantDataMixin } from '../../../constantDataMixin.js'
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions('trip', [
      'getBudget'
    ])
  },
  created () {
    if (this.trip.budget == null) {
      this.getBudget(this.tripId)
    }
  },
  mixins: [constantDataMixin]
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  tr {
    text-align: center;
    border-bottom: 1px solid #d4d4d4;
  }
  th {
    height: 50px;
    width: 50%;
    text-align: center;
  }
}

.budget-details-title {
  margin-top: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
}
</style>
