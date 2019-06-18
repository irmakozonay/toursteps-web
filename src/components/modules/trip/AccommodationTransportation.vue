<template>
  <div>
    <div class="hotel-item" v-for="accommodation in trip.accommodations" :key="accommodation.id">
      <div class="item-media">
        <div class="image-cover">
          <img :src="accommodation.stayPlace.mapsPlace.photo.url" alt>
        </div>
      </div>
      <div class="item-body">
        <div class="item-title">
          <h2>
            <a :href="accommodation.stayPlace.url"
              target="_blank">{{accommodation.stayPlace.mapsPlace.name}}</a>
          </h2>
        </div>
        <div class="item-hotel-star">{{getStars(accommodation.stayPlace)}}</div>
        <div class="item-address">{{accommodation.stayPlace.mapsPlace.address.locality.name}}</div>
        <div class="item-footer">
          <div class="item-rate">
            <span>{{accommodation.stayPlace.rating}} / 10</span>
          </div>
        </div>
      </div>
      <div class="item-price-more">
        <div class="price">
          {{accommodation.checkInDate | formatDate('DD MMM')}} - {{accommodation.checkOutDate | formatDate('DD MMM')}}
          <span class="amount">{{getCurrency(accommodation.currency)}}{{accommodation.price}}</span>
        </div>
        <a :href="accommodation.stayPlace.url"
          target="_blank"
          class="awe-btn">More</a>
      </div>
    </div>

    <!--<div class="initiative__item">-->
    <!--<div class="initiative-top">-->
    <!--<div class="title">-->
    <!--<div class="from-to">-->
    <!--In Trip Flight:-->
    <!--<span class="from">Athens</span>-->
    <!--<i class="awe-icon awe-icon-arrow-right"></i>-->
    <!--<span class="to">Santorini</span>-->
    <!--</div>-->
    <!--<div class="time">Saturday 5 May 2018 - Monday 7 May 2018</div>-->
    <!--</div>-->
    <!--<div class="price">-->
    <!--<span class="amount">135 € per person</span>-->
    <!--<a href="https://www.skyscanner.net/transport/flights/ath/jtr/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home&oym=1809&selectedoday=01&iym=1810&selectediday=01" target="_blank" (click)="trackButtonClick('change_flight', 'Flight');">Choose other</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--<table class="initiative-table">-->
    <!--<tbody>-->
    <!--<tr>-->
    <!--<th>-->
    <!--<div class="item-thumb">-->
    <!--<div class="image-thumb">-->
    <!--<img data-src="images/flight/olympicair.png" alt="">-->
    <!--</div>-->
    <!--<div class="text">-->
    <!--<p>Olympic Air</p>-->
    <!--<span>Economy</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</th>-->
    <!--<td>-->
    <!--<div class="item-body">-->
    <!--<div class="item-from">-->
    <!--<h3>ATH</h3>-->
    <!--<span class="time">07:15</span>-->
    <!--<span class="date">Sat, 5 May 2018</span>-->
    <!--<p class="desc">Athens International, Athens</p>-->
    <!--</div>-->
    <!--<div class="item-time">-->
    <!--<i class="fa fa-clock-o"></i>-->
    <!--<span>0h 45m</span>-->
    <!--</div>-->
    <!--<div class="item-to">-->
    <!--<h3>JTR</h3>-->
    <!--<span class="time">08:00</span>-->
    <!--<span class="date">Sat, 5 May 2018</span>-->
    <!--<p class="desc">Santorini (Thira), Santorini</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</td>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<th>-->
    <!--<div class="item-thumb">-->
    <!--<div class="image-thumb">-->
    <!--<img data-src="images/flight/olympicair.png" alt="">-->
    <!--</div>-->
    <!--<div class="text">-->
    <!--<p>Olympic Air</p>-->
    <!--<span>Economy</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</th>-->
    <!--<td>-->
    <!--<div class="item-body">-->
    <!--<div class="item-from">-->
    <!--<h3>JTR</h3>-->
    <!--<span class="time">13:15</span>-->
    <!--<span class="date">Mon, 7 May 2018</span>-->
    <!--<p class="desc">Santorini (Thira), Santorini</p>-->
    <!--</div>-->
    <!--<div class="item-time">-->
    <!--<i class="fa fa-clock-o"></i>-->
    <!--<span>0h 45m</span>-->
    <!--</div>-->
    <!--<div class="item-to">-->
    <!--<h3>ATH</h3>-->
    <!--<span class="time">14:00</span>-->
    <!--<span class="date">Mon, 7 May 2018</span>-->
    <!--<p class="desc">Athens International, Athens</p>-->
    <!--</div>-->
    <!--</div>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->
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
      'getAccommodations'
    ])
  },
  created () {
    if (this.trip.budget == null) {
      this.getAccommodations(this.tripId)
    }
  },
  mixins: [constantDataMixin]
}
</script>

<style lang="scss" scoped>
$color: #0091ea !default;

.hotel-item {
  background-color: #fff;
  overflow: hidden;
  margin: 14px 14px 20px 14px;
  min-height: 169px;
  border: 1px solid lightgray;
  .item-media {
    position: relative;
    width: 30%;
    float: left;
    .image-cover img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
  .item-body {
    position: relative;
    padding: 18px 34px;
    width: 50%;
    float: left;
    overflow: hidden;
    overflow-x: auto;
    .item-title {
      h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        a {
          display: inline-block;
          word-break: break-word;
          text-overflow: ellipsis;
          color: #222;
          &:hover {
            color: $color;
          }
        }
      }
    }
    .item-hotel-star {
      font-size: 11px;
      color: #ffd34e;
    }
    .item-address {
      font-weight: 600;
      font-size: 13px;
      color: #666;
      margin-top: 5px;
    }
    .item-footer {
      margin-top: 35px;
      overflow: hidden;
      .item-rate {
        float: left;
        font-size: 18px;
        font-weight: 700;
        color: #b1b1b1;
      }
    }
  }
  .item-price-more {
    position: relative;
    padding: 0 30px;
    margin: 20px 0;
    width: 20%;
    float: right;
    overflow: hidden;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 0;
      top: 0;
      bottom: 0;
      left: 0;
      border-left: 2px dotted #d4d4d4;
    }
    .price {
      position: relative;
      font-style: italic;
      font-size: 14px;
      color: #b1b1b1;
      ins {
        text-decoration: none;
      }
      .amount {
        display: block;
        font-weight: 700;
        font-style: normal;
        font-size: 24px;
        color: #666;
      }
    }
    a {
      margin-top: 32px;
    }
  }
  &:hover {
    .item-body {
      .item-title {
        h2 {
          a {
            color: $color;
          }
        }
      }
      .item-footer {
        ul {
          li {
            h6 {
              color: $color;
            }
          }
        }
      }
    }
    .item-price-more {
      .price {
        color: $color;
        .amount {
          color: $color;
        }
        del {
          .amount {
            color: #b1b1b1;
          }
        }
      }
    }
  }
}

.initiative__item {
  margin: 14px 14px 50px 14px;
  &:last-child {
    margin-bottom: 0;
  }
}
.initiative-top {
  overflow: hidden;
  .title {
    float: left;
    .from-to {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      .awe-icon {
        font-size: 10px;
        margin-left: 3px;
        margin-right: 3px;
      }
    }
    .time {
      font-size: 13px;
      color: #a5a5a5;
      margin-top: 3px;
    }
  }
  .price {
    float: right;
    text-align: right;
    .amount {
      display: block;
      font-size: 18px;
      font-weight: 600;
      color: #666;
    }
    a {
      display: block;
      font-size: 13px;
      color: $color;
      text-decoration: underline;
      &:hover {
        color: #444;
      }
    }
  }
}
.initiative-table {
  background-color: #fff;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 10px;
  border-radius: 6px;
  tbody {
    tr {
      border-bottom: 2px solid #d4d4d4;
      &:last-child {
        border: 0;
      }
      th,
      td {
        padding: 20px;
      }
      th {
        width: 170px;
      }
      .item-thumb {
        position: relative;
        text-align: center;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 100%;
          border-right: 2px dotted #d4d4d4;
          top: 0;
          right: -20px;
        }
        .text {
          margin-top: 8px;
          span {
            font-size: 12px;
            font-weight: 400;
            color: #a5a5a5;
          }
          p {
            font-size: 18px;
            font-weight: 700;
            color: $color;
            margin: 0;
          }
        }
      }
      .item-body {
        padding: 0 30px;
        font-size: 0;
        overflow: hidden;
        .item-from,
        .item-time,
        .item-to {
          display: inline-block;
          width: 33.3%;
          padding: 0 20px;
          text-align: center;
          vertical-align: middle;
        }
        .item-time {
          .fa {
            display: block;
            font-size: 20px;
            color: #a6a6a6;
          }
          span {
            display: inline-block;
            font-weight: 600;
            font-size: 14px;
            color: #a5a5a5;
            padding: 8px 6px;
            border-top: 1px dashed #a5a5a5;
            margin-top: 10px;
          }
        }
        .item-from,
        .item-to {
          h3 {
            font-size: 18px;
            font-weight: 700;
            color: $color;
            margin: 0;
          }
          .time {
            display: block;
            font-size: 18px;
            font-weight: 700;
            color: #a5a5a5;
          }
          .date {
            display: block;
            font-size: 11px;
            font-weight: 600;
            color: #666;
            margin-top: 4px;
          }
          .desc {
            font-size: 14px;
            color: #a5a5a5;
            margin-top: 2px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .hotel-item {
    .item-media {
      float: none;
      width: 100%;
    }
    .item-body {
      float: none;
      width: 100%;
      padding: 8px 25px;
      .item-title {
        h2 {
          font-size: 18px;
        }
      }
      .item-footer {
        margin-top: 2px;
      }
    }
    .item-price-more {
      padding: 0;
      margin: 0 0 10px 0;
      float: none;
      position: center;
      width: 100%;
      text-align: center;
      &:after {
        content: "";
        display: inline-block;
        position: center;
        border-left: none;
      }
      a {
        margin-top: 2px;
      }
    }
  }
}
</style>
