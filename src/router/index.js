import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/modules/home/Home'
import Trip from '@/components/modules/trip/Trip'
import Itinerary from '@/components/modules/trip/itinerary/Itinerary'
import AccommodationTransportation from '@/components/modules/trip/AccommodationTransportation'
import Budget from '@/components/modules/trip/Budget'
import AdditionalInfo from '@/components/modules/trip/AdditionalInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/trip/:url',
      component: Trip,
      children: [
        { path: '', name: 'Itinerary', component: Itinerary },
        { path: 'accommodation', name: 'AccommodationTransportation', component: AccommodationTransportation },
        { path: 'budget', name: 'Budget', component: Budget },
        { path: 'additionalInfo', name: 'AdditionalInfo', component: AdditionalInfo }
      ]
    }
  ]
})
