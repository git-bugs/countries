import './pagination.scss'


export const pagingItems = (page, countries) => {
  let end = page * 72 - 1
  let start = end - 71
  if (end > countries.length) end = countries.length - 1
  const items = []
  for (let i = start; i <= end; i++) {
    items.push(countries[i])
  }
  return items
}


export const Pagination = ({ page, total, setPage }) => {
  const pages = []
  const totalPages = Math.ceil(total / 72)
  const pagination = () => {
    if (totalPages > 5) {
      if (page > 3) {
        if (page + 2 < totalPages) {
          for (let i = page - 2; i <= page + 2; i++) {
            pages.push(i)
          }
        } else {
          for (let i = totalPages - 5; i <= totalPages; i++) {
            pages.push(i)
          }
        }
      } else {
        for (let i = 1; i <= 6; i++) {
          pages.push(i)
        }
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    }
    return pages
  }
  pagination()

  return (
    <ul className="users__pagination">
      {
        pages.map((item) =>
          <li
            className={item === page ? "users__pagination-item active" : "users__pagination-item"}
            key={item}
            onClick={() => setPage(item)}
          >{item}</li>)
      }
    </ul>
  )
}

