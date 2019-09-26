<template>
  <div>
    <table class="good-to-know-table">
      <tbody>
      <tr v-for="info in trip.additionalInfo" :key="info.name">
        <th>
          <p>{{info.name}}</p>
        </th>
        <td>
          <p>{{info.description}}</p>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
      'getAdditionalInfo'
    ])
  },
  created () {
    if (this.trip.additionalInfo == null) {
      this.getAdditionalInfo(this.tripId)
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #0a5e6b !default;

.good-to-know-table {
  width: 100%;
  margin-top: 10px;
  tbody {
    tr {
      border-bottom: 1px solid #D4D4D4;
      th {
        font-size: 13px;
        font-weight: 600;
        color: #262626;
        padding: 18px 0;
        width: 35%;
        p {
          position: relative;
          margin-left: 20px;
          padding-left: 20px;
          &:before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: $color;
            left: 0;
            top: 8px;
          }
        }
      }
      td {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 13px;
        font-weight: 600;
        color: #777;
        width: 65%;
      }
    }
  }
}

</style>
