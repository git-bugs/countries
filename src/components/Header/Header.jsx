import cn from 'classnames'
import './header.scss'


export const Header = ({ search, setSearch,setPage }) => {

  const handler = e => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <header className="header">
      <nav>
        <div className="header__wrapper">
          <div className="header__input-inner">
            <label className="input-label">
              <input
                type="text"
                className={cn("header__search", {
                  "search-active": search
                })}
                value={search}
                onChange={handler}
              />
              <span
                className={cn("input-text", {
                  "input-active": search
                })}
              >Search</span>
            </label>
            {
              search &&
              <button
                className="header__clear"
                onClick={() => setSearch('')}
              >
                <svg version="1.1" id="Capa_1" x="0px" y="0px"
                  width="30px" height="30px" viewBox="0 0 95.939 95.939" fill="#fff"
                >
                  <g>
                    <path d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
                    c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
                    c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
                    c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
                    c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97z"/>
                  </g>
                </svg>
              </button>
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
