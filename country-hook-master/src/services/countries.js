import axios from 'axios'

const baseUrl = `https://restcountries.eu/rest/v2/name/{name}?fullText=true`

const getAll = async () => {
  const response = await axios.get("https://restcountries.eu/rest/v2/name/united")
  return response.data
}

const getCountry = async (name) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`)
  return response.data
}

export default {
  getCountry,
  getAll
}
