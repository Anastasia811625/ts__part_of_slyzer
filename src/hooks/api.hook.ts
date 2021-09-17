import axios from 'axios'

axios.defaults.withCredentials = true;

const API_V = 'v1';

const getUrl = (url) => `/api/${API_V + url}`

export const useApi = () => {

  return async (url, options) => {

    if (url[0] !== '/') {
      throw new Error('url must begin with /')
    }

    const { method = 'GET', body = null, headers = {}, params } = options ?? {}

    try {
      const response = await axios({
        url: getUrl(url),
        method,
        data: body,
        headers,
        params
      })

      return response.data
    } catch (error) {
      console.error(error);
      throw error.response.data
    }
  }
}