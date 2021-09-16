import axios from "axios"
import { setCountries, setLoad } from "../redux/countriesReducer"

export const getCountries = () => {
  return async dispatch => {
    dispatch(setLoad(true))
    const res = await axios('https://restcountries.eu/rest/v2/all')
    dispatch(setCountries(res.data))
    dispatch(setLoad(false))
  }
}
