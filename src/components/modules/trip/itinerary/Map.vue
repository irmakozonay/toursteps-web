<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  props: {
    mapsPlaces: null
  },
  data () {
    return {
      markers: []
    }
  },
  mounted () {
    const scripts = document.head.getElementsByTagName('script')
    let shouldLoad = true
    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9RJHfJ0grdSlkp-1rsPhcwB6-5HURaH0'
    for (const script of scripts) {
      if (script.src === url) {
        shouldLoad = false
      }
    }
    if (shouldLoad) {
      let mapScript = document.createElement('script')
      mapScript.setAttribute(
        'src',
        url
      )
      document.head.appendChild(mapScript)
      mapScript.async = true
      mapScript.defer = true
    }
  },
  watch: {
    mapsPlaces: function (newVal, oldVal) {
      if (newVal != null) {
        if (this.map == null) {
          this.initMap()
        } else {
          this.clearMarkers()
          this.addMarkers()
          this.map.panTo({ lat: this.mapsPlaces[0].coordinate.lat, lng: this.mapsPlaces[0].coordinate.lon })
        }
      }
    }
  },
  methods: {
    initMap () {
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.mapsPlaces[0].coordinate.lat, lng: this.mapsPlaces[0].coordinate.lon },
        zoom: 12
      })
      this.addMarkers()
    },
    addMarkers () {
      this.mapsPlaces.forEach(mapsPlace => {
        const position = { lat: mapsPlace.coordinate.lat, lng: mapsPlace.coordinate.lon }
        // eslint-disable-next-line no-undef
        const infowindow = new google.maps.InfoWindow({
          content: mapsPlace.name
        })
        // eslint-disable-next-line no-undef
        const marker = new google.maps.Marker({
          position,
          map: this.map
        })
        marker.addListener('click', function () {
          infowindow.open(this.map, marker)
        })
        this.markers.push(marker)
      })
    },
    clearMarkers () {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null)
      }
      this.markers = []
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 300px;
}
</style>
