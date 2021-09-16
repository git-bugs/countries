import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Country } from '../../components/Country/Country'
import { Loader } from '../../components/Loader/Loader'
import { Pagination, pagingItems } from '../../components/Pagination/Pagination'
import { getCountries } from '../../https/country-http'
import './main.scss'


export const Main = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [searchStatus, setSearchStatus] = useState(false)
  const [country, setCountry] = useState('')
  const [page, setPage] = useState(1)

  const { countries, isLoad } = useSelector(data => ({
    countries: data.countries.countries,
    isLoad: data.countries.isLoad
  }))

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  const find = countries.find(item => item.name === country)

  const filterCountries = countries.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()))
  const pagingCountries = pagingItems(page, filterCountries)

  const handler = e => {
    setSearch(e.target.value)
    setPage(1)
  }

  const searchHandler = () => {
    setSearchStatus(!searchStatus)
    setSearch('')
  }

  return (
    <div className="content">
      <section className="countries">
        <div className="container">
          <ul className="main__list">
            {isLoad && <Loader />}
            {
              pagingCountries.map(item => (
                <li key={item.alpha3Code} onClick={() => setCountry(item.name)}                >
                  <span>{item.name}</span>
                  <img className="main__list-flag" src={item.flag} alt={item.name} />
                </li>
              ))
            }
          </ul>
          {
            country && <Country {...find} setCountry={setCountry} />
          }
          {
            filterCountries.length > 70 &&
            <Pagination page={page} total={filterCountries.length} setPage={setPage} />
          }
        </div>
        <div className="search__btn">
          <div className={searchStatus ? "country__search active" : "country__search"}>
            <input type="text" value={search} onChange={handler} />
          </div>
          <div className="search__img  waves-effect" onClick={searchHandler}>
            {
              searchStatus ?
                <svg height="35" viewBox="0 0 365.696 365.696" width="35" fill="#fff"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>
                :
                <svg version="1.1" id="Capa_1" x="0px" y="0px"
                  width="35" height="35" viewBox="0 0 30.239 30.239"
                  fill="#fff">
                  <g>
                    <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
		c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
		c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
		 M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
		C21.517,9.026,21.517,14.63,18.073,18.074z"/>
                  </g>
                </svg>
            }
          </div>
        </div>
      </section>
    </div>
  )
}
