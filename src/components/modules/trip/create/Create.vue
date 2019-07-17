<template>
    <div id="travelsteps">
        <button @click="onLogout" class="logout">Logout</button>
        <div class="col-md-12">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link :to="{ name: 'RegionCreate' }" tag="li" class="nav-link" active-class="active">Region</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'ItineraryCreate' }" tag="li" class="nav-link" active-class="active" exact>Itinerary</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'BudgetCreate' }" tag="li" class="nav-link" active-class="active">Budget</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'AdditionalInfoCreate' }" tag="li" class="nav-link" active-class="active">Info</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'AccommodationCreate' }" tag="li" class="nav-link" active-class="active">Accommodation</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'TripCreate' }" tag="li" class="nav-link" active-class="active">Trip</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'UserCreate' }" tag="li" class="nav-link" active-class="active">User</router-link>
                </li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', [
      'signout'
    ]),
    onLogout () {
      this.signout()
    }
  }
}
</script>
