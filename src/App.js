import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Pagination, pagingItems } from "./components/Pagination/Pagination";
import { Country } from "./components/Country/Country";
import { Main } from "./pages/Main/Main";


function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('')
  const [page, setPage] = useState(1)
  const [load, setLoad] = useState(false)

  const getData = async () => {
    setLoad(true)
    const data = await axios('https://restcountries.eu/rest/v2/all')
    setCountries(data.data)
    setLoad(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const filterCountries = countries.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()))

  const find = countries.find(item => item.name === country)

  const pagingCountries = pagingItems(page, filterCountries)

  return (
    <div className="content"    >
      <Header
        search={search}
        setSearch={setSearch}
        setPage={setPage}
      />
      <Main
        countries={pagingCountries}
        setCountry={setCountry}
        load={load}
      />
      {
        country && <Country {...find} setCountry={setCountry} />
      }
      {
        filterCountries.length > 70 &&
        <Pagination page={page} total={filterCountries.length} setPage={setPage} />
      }
    </div>
  );
}

export default App;
