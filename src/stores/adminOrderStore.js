import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import { useLoading } from 'vue-loading-overlay'

const $loading = useLoading()
const { VITE_API, VITE_PATH } = import.meta.env

export const useAdminOrderStore = defineStore('adminOrders', {
  state: () => ({
    // 所有訂單
    allOrderList: [],
    // 當頁訂單列表
    currentOrderList: [],
    // 頁碼
    pagination: {}
  }),
  actions: {
    // 重置全部訂單資料
    resetAllOrderList () {
      this.allOrderList = []
      return this.allOrderList
    },

    // 獲取全部訂單
    getAllOrderList (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`

      const loader = $loading.show()

      return axios.get(url)
        .then(res => {
          const { orders } = res.data
          this.allOrderList = this.allOrderList.concat(orders)
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
        .finally(() => loader.hide())
    },
    // 獲取當頁訂單列表
    getCurrentOrderList (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`

      return axios.get(url)
        .then(res => {
          const { orders, pagination } = res.data
          this.currentOrderList = orders
          this.pagination = pagination
        })
        .catch(err => {
          swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    }
  }
})
