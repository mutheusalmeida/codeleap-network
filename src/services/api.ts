import axios from 'axios'

export const codeleapApi = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers',
  headers: {
    'Content-Type': 'application/json',
  },
})
