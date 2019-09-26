<template>
  <div class="destinations-item">
    <div class="item-media">
      <div class="image-cover">
        <router-link tag="a" :to="{name: 'Itinerary', params: {url: trip.url}}">
          <img :src="trip.mainMedia.url" alt>
        </router-link>
      </div>
    </div>
    <div class="item-body">
      <div class="item-title">
        <router-link tag="a" :to="{name: 'Itinerary', params: {url: trip.url}}">
          <h2>{{trip.title}}</h2>
        </router-link>
      </div>
      <p>Created By:</p>
      <app-user-info :shortInfo="true" :user="trip.user"></app-user-info>
      <div class="item-footer">
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
        <!-- <ul>
          <li>
            <p>👛</p>
            <p>{{priceText}} ({{trip.travelerCount}})</p>
          </li>
          <li>
            <p>{{travelerTypeEmoji}}</p>
            <p>{{travelerTypeText}}</p>
          </li>
          <li>
            <p>{{visitTypeEmoji}}</p>
            <p>{{visitTypeText}}</p>
          </li>
          <li>
            <p>📍</p>
            <p>{{visitCountText}}</p>
          </li>
          <li>
            <p>🚶‍♀</p>
            <p>{{paceTypeText}}</p>
          </li>
          <li>
            <p>🛏️</p>
            <p>{{stayPlacesText}}</p>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from '../user/UserInfo.vue'
import { constantDataMixin } from '../../../constantDataMixin.js'

export default {
  props: {
    trip: Object
  },
  computed: {
    visitTypeEmossji () {
      const value = this.getDataType('visitTypeEmojis', this.trip.visitType)
      return value == null ? '🛎️' : value
    }
  },
  components: {
    appUserInfo: UserInfo
  },
  mixins: [constantDataMixin]
}
</script>

<style lang="scss" scoped>
$color: #0a5e6b !default;

.destinations-item {
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  .item-media {
    width: 24%;
    float: left;
    .image-cover {
      overflow: hidden;
    }
  }
  a {
    color: #0a5e6b;
  }
  .item-body {
    padding: 18px 34px;
    width: 76%;
    float: left;
    .item-title {
      margin-bottom: 10px;
      h2 {
        margin: 0;
        font-size: 24px;
        font-weight: 400;
        a {
          display: inline-block;
          word-break: break-word;
          color: #666;
          &:hover {
            color: $color;
          }
        }
      }
    }
    .item-footer {
      margin-top: 18px;
      margin-bottom: 10px;
      // ul {
      //   list-style: none;
      //   padding: 0;
      //   margin: 0;
      //   li {
      //     display: inline-block;
      //     margin-right: 50px;
      //     > p {
      //       font-size: 15px;
      //       color: #444;
      //       margin-bottom: 0;
      //       text-align: center;
      //     }
      //   }
      // }
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
  }
}

@media screen and (max-width: 700px) {
  .destinations-item {
    .item-media {
      float: none;
      width: 100%;
    }
    .item-body {
      float: none;
      width: 100%;
    }
  }

  .destinations-item .item-body {
    padding: 15px 25px;
  }
}
</style>
