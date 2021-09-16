const SET_COUNTRIES = 'set countries'
const SET_LOAD = 'set countries load status'


const initialState = {
  countries: [],
  isLoad: false
}

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case SET_LOAD:
      return {
        ...state,
        isLoad: action.payload
      }
    default: return state
  }
}

export const setCountries = payload => ({ type: SET_COUNTRIES, payload })
export const setLoad = payload => ({ type: SET_LOAD, payload })