import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/modules/home/Home'
import Trip from '@/components/modules/trip/Trip'
import Itinerary from '@/components/modules/trip/itinerary/Itinerary'
import AccommodationTransportation from '@/components/modules/trip/AccommodationTransportation'
import Budget from '@/components/modules/trip/Budget'
import AdditionalInfo from '@/components/modules/trip/AdditionalInfo'
import Create from '@/components/modules/trip/create/Create.vue'
import ItineraryCreate from '@/components/modules/trip/create/ItineraryCreate.vue'
import BudgetCreate from '@/components/modules/trip/create/BudgetCreate.vue'
import RegionCreate from '@/components/modules/trip/create/RegionCreate.vue'
import AdditionalInfoCreate from '@/components/modules/trip/create/AdditionalInfoCreate.vue'
import AccommodationCreate from '@/components/modules/trip/create/AccommodationCreate.vue'
import TripCreate from '@/components/modules/trip/create/TripCreate.vue'
import UserCreate from '@/components/modules/trip/create/UserCreate.vue'
import Signin from '@/components/modules/auth/Signin.vue'
import Signup from '@/components/modules/auth/Signup.vue'
import authStore from '@/components/modules/auth/store.js'
// import store from '../store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'Signin', component: Signin },
    { path: '/signup', name: 'Signup', component: Signup },
    {
      path: '/trip/:url',
      component: Trip,
      children: [
        { path: '', name: 'Itinerary', component: Itinerary },
        { path: 'accommodation', name: 'AccommodationTransportation', component: AccommodationTransportation },
        { path: 'budget', name: 'Budget', component: Budget },
        { path: 'info', name: 'AdditionalInfo', component: AdditionalInfo }
      ]
    },
    { path: '/create',
      component: Create,
      children: [
        { path: 'itinerary', name: 'ItineraryCreate', component: ItineraryCreate },
        { path: 'budget', name: 'BudgetCreate', component: BudgetCreate },
        { path: 'region', name: 'RegionCreate', component: RegionCreate },
        { path: 'info', name: 'AdditionalInfoCreate', component: AdditionalInfoCreate },
        { path: 'accommodation', name: 'AccommodationCreate', component: AccommodationCreate },
        { path: 'trip', name: 'TripCreate', component: TripCreate },
        { path: 'user', name: 'UserCreate', component: UserCreate }
      ],
      beforeEnter (to, from, next) {
        // store.dispatch('auth/autoLogin')
        if (authStore.state.accessToken) {
          next()
        } else {
          next('/signin')
        }
      }
    }
  ]
})
