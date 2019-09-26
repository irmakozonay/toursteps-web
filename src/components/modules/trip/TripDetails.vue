<template>
  <div class="trip-details">
    <div class="tag-cloud">
      <a v-for="interest in trip.interests" :key="interest.interest">{{getInterest(interest.interest)}}</a>
    </div>
    <div class="item">
      <h6>{{trip.user.firstName}}'s Travel</h6>
      <p>⏱ {{trip.totalDayCount}} day{{trip.totalDayCount > 1 ? 's' : ''}}</p>
      <ul>
        <li v-for="tripRegion in trip.regions" :key="tripRegion.region.name">{{tripRegion.region.name}}: {{tripRegion.dayCount}} day{{tripRegion.dayCount > 1 ? 's' : ''}}</li>
      </ul>
      <p>📆 {{trip.startDate | formatDate('DD MMM YY')}} - {{trip.endDate | formatDate('DD MMM YY')}}</p>
      <p>🗂 Booked in {{trip.bookDate | formatDate('MMMM')}}</p>
    </div>
    <h5>Other Details</h5>
    <div class="item">
      <table>
        <tr>
          <th>👛</th>
          <th>{{travelerTypeEmoji}}</th>
          <th>{{visitTypeEmoji}}</th>
        </tr>
        <tr>
          <td>{{trip.travelerCount}} person{{trip.travelerCount > 1 ? 's' : ''}} {{priceText}}</td>
          <td>{{travelerTypeText}}</td>
          <td>{{visitTypeText}}</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>📍</th>
          <th>🚶‍♀</th>
          <th>🛏️</th>
        </tr>
        <tr>
          <td>{{visitCountText}}</td>
          <td>{{paceTypeText}}</td>
          <td>{{stayPlacesText}}</td>
        </tr>
      </table>

      <!-- <h6>Other Details</h6>
      <ul>
        <li>👛 Total Budget ({{trip.travelerCount}} person{{trip.travelerCount > 1 ? 's' : ''}}) : {{priceText}}</li>
        <li>{{travelerTypeEmoji}} {{travelerTypeText}}</li>
        <li>{{visitTypeEmoji}} {{visitTypeText}}</li>
        <li>📍 {{visitCountText}}</li>
        <li>🚶‍♀ {{paceTypeText}}</li>
        <li>🛏️ {{stayPlacesText}}</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import { constantDataMixin } from '../../../constantDataMixin.js'

export default {
  props: {
    trip: Object
  },
  mixins: [constantDataMixin]
}
</script>

<style lang="scss" scoped>
$color: #0a5e6b !default;

.trip-details {
  overflow: hidden;
  margin-top: 20px;
  .tag-cloud {
    font-size: 0;
    margin-bottom: 16px;
    a {
      display: inline-block;
      font-weight: 600;
      font-size: 12px !important;
      color: #666;
      padding: 3px 10px;
      background-color: #ddd;
      margin: 4px;
      &:hover {
        color: #fff;
        background-color: $color;
      }
    }
  }
  h5 {
    text-align: center;
    color: #0a5e6b;
  }
  .item {
    h6 {
      font-weight: 700;
      font-size: 13px;
      color: #666;
      margin-top: 0;
      margin-bottom: 5px;
    }
    li {
      font-size: 15px;
    }
  }
  table {
    table-layout: fixed;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  th {
    font-size: 24px;
  }
  td, th {
    text-align: center;
    padding: 4px;
  }
}
</style>
