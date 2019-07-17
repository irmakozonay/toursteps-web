<template>
  <div>
    <h4 v-if="!shortInfo">Traveled by</h4>
    <div class="about-author">
      <div class="image-thumb">
        <div class="image-cover">
          <a href="#">
            <img :src="user.media.url" alt>
          </a>
        </div>
      </div>
      <div class="author-info">
        <div class="author-name" @click="trackClick('author', user.firstName + ' ' + user.lastName)">
          <a>
            <h3>{{user.firstName}} {{user.lastName}}</h3>
          </a>
        </div>
        <div v-if="!shortInfo" class="widget widget_tag_cloud">
          <div class="tag-cloud">
            <a v-for="interest in user.interests" :key="interest.interest">{{getInterest(interest.interest)}}</a>
          </div>
        </div>
        <ul v-if="!shortInfo && user.region">
          <li>From {{user.region.name}}, {{user.region.country.name}}</li>
          <li>{{travelTimesText}}</li>
        </ul>
        <a
          v-if="!shortInfo"
          @click="trackClick('ask_question', user.firstName + ' ' + user.lastName)"
          href="mailto:info@toursteps.com?subject=Trip Information&body=- This message will be redirected to the Author"
          class="awe-btn"
        >Ask a Question To {{user.firstName}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { constantDataMixin } from '../../../constantDataMixin.js'
import { eventsMixin } from '../../../eventsMixin.js'

export default {
  props: {
    shortInfo: {
      type: Boolean,
      default: false
    },
    user: Object
  },
  mixins: [constantDataMixin, eventsMixin]
}
</script>

<style lang="scss" scoped>
$color: #0091ea !default;

.about-author {
  position: relative;
  border-bottom: 1px solid #d4d4d4;
  overflow: hidden;
  padding-bottom: 35px;
  margin-bottom: 20px;
  .image-thumb {
    float: left;
    width: 70px;
    height: 70px;
    overflow: hidden;
    .image-cover {
      overflow: hidden;
    }
  }
  .author-title {
    h4 {
      font-size: 16px;
      color: #262626;
      margin-top: 0;
      text-shadow: none;
      line-height: 1.2em;
    }
  }
  .author-name {
    margin-top: 4px;
    h3 {
      font-size: 24px;
      font-weight: 400;
      color: #262626;
      margin-top: 0;
      text-shadow: none;
      line-height: 1.2em;
    }
  }
  .author-info {
    margin-left: 100px;
    li {
      font-size: 15px;
    }
  }
}

.tag-cloud {
  font-size: 0;
  margin-left: -4px;
  margin-right: -4px;
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
</style>
