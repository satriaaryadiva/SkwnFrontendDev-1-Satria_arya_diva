import axios from 'axios'

const API = axios.create({
  baseURL: 'https://dummyjson.com'
})

export const getFurnitureProducts = async () => {
  const res = await API.get('/products/category/furniture')
  return res.data.products
}
