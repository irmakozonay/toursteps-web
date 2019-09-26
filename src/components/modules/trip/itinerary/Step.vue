<template>
  <div class="step">
    <li v-if="step.type == 'local_transportation'">
      {{transportationEmoji}}
      {{transportationTypeText}}
      {{step.localTransportation.destination ? 'to ' + step.localTransportation.destination : ''}}
      {{step.localTransportation.vehicleName ? '(' + step.localTransportation.vehicleName + ')' : ''}}
      {{step.note ? '(' + step.note + ')' : ''}}
    </li>
    <div class="maps-place" v-if="step.type == 'place' || step.type == 'stay_place'">
      <div class="attraction-item">
        <div class="item__inner">
          <div class="item-media">
            <div class="image-cover">
              <img :src="step.place.mapsPlace.photo.url" alt>
            </div>
          </div>
          <div class="item-body">
            <div class="item-title">
              <h2>
                <a href="#">{{ step.place.mapsPlace.name }}</a>
              </h2>
              {{placeType | capitalize}}
            </div>
            <div class="item-address">{{step.place.mapsPlace.address.locality.name}}</div>
            <div class="item-footer">
              <div class="item-rate" v-if="step.place.mapsPlace.rating != 0">
                <span>{{ step.place.mapsPlace.rating }} / 5</span>
              </div>
            </div>
            <p class="step-note" v-if="step.note != null">{{step.note}}</p>
          </div>
          <div class="item-price-more">
            <div v-if="step.currency != null" class="price">
              Price
              <ins>
                <span class="amount">{{getCurrency(step.currency)}} {{step.price}}</span>
              </ins>
            </div>
            <p v-if="step.duration != null" class="price">{{step.duration}} minutes</p>
            <div :class="{'height-placeholder': step.currency == null}">
              <a :href="step.place.mapsPlace.url" target="_blank" class="awe-btn" @click="trackClick('itinerary_item_details', step.place.mapsPlace.name)">INFO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <li v-if="step.type == 'note'">{{step.note}}</li>
  </div>
</template>

<script>
import { constantDataMixin } from '../../../../constantDataMixin'
import { eventsMixin } from '../../../../eventsMixin.js'

export default {
  props: {
    step: Object
  },
  computed: {
    placeType () {
      return this.step.place.mapsPlace.types[0].replace(/_/g, ' ')
    }
  },
  mixins: [constantDataMixin, eventsMixin]
}
</script>

<style lang="scss" scoped>
$color: #0a5e6b !default;

.maps-place {
  margin-top: 15px;
  margin-bottom: 15px;
}

.step {
  font-size: 15px;
}

.attraction-item {
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 6px;
  margin-top: 14px;
  border: 1px solid lightgray;
  border-radius: 2px;
  .item-media {
    position: relative;
    width: 30%;
    float: left;
    .image-cover img {
      width: 100%;
      height: 180px;
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
    .item-address {
      font-weight: 600;
      font-size: 11px;
      color: #666;
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
    .step-note {
      margin-top: 10px;
      font-size: 14px;
      color: #969696;
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
    .height-placeholder {
      height: 100px;
      display: table-cell;
      vertical-align: middle;
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

@media screen and (max-width: 700px) {
  .attraction-item {
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
      .height-placeholder {
        height: 40px;
        display: inline-block;
      }
    }
  }
}
</style>
