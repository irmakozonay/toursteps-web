import axios from 'axios'
// import authStore from '../../auth/store.js'

export default {
  addBudget: async function (tripId, budget) {
    await axios.put('/trip/budget/add?tripid=' + tripId, budget)
  },
  addRegions: async function (regions) {
    await axios.put('/trip/regions/add', regions)
  },
  addAdditionalInfo: async function (tripId, info) {
    await axios.put('/trip/additionalinfo/add?tripid=' + tripId, info)
    // console.log(authStore.state.accessToken)
    // let accessToken = authStore.state.accessToken
    // if (accessToken != null) {
    //   await axios.put('/trip/additionalinfo/add?tripid=' + tripId, info, {
    //     headers: {
    //       Authorization: 'Bearer ' + accessToken
    //     }
    //   })
    // }
  },
  addAccommodations: async function (tripId, accommodations) {
    await axios.put('/trip/accommodations/add?tripid=' + tripId, accommodations)
  },
  addTrip: async function (trip, images) {
    await axios.put('/trip/add', trip).then(res => {
      console.log('trip add id:' + res.id)
      this.addTripImages(res.id, images)
    })
  },
  addTripImages (tripId, images) {
    console.log('send trip images')
    const formData = new FormData()
    for (const image of images) {
      formData.append('files', image)
    }
    axios.post('/trip/addimages?tripid=' + tripId, formData)
  },
  addUser: async function (user) {
    await axios.put('/user/add', user)
  },
  addUserImage (userId, image) {
    console.log('send user image')
    const formData = new FormData()
    formData.append('file', image)
    axios.post('/user/addimage?userid=' + userId, formData)
  }
}
