import { createRouter, createWebHistory } from 'vue-router'
import PersonalData from '../views/PersonalData.vue'
import Address from '../views/Address.vue'
import Packages from '../views/Packages.vue'
import PaymentData from '../views/PaymentData.vue'
import DataStore from '../views/DataStore.vue'
import Thanks from '../views/Thanks.vue'

const routes = [
  {
    path: '/',
    name: 'PersonalData',
    component: PersonalData
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/packages',
    name: 'Packages',
    component: Packages
  },
  {
    path: '/payment-data',
    name: 'PaymentData',
    component: PaymentData
  },
  {
    path: '/data-store',
    name: 'DataStore',
    component: DataStore
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
