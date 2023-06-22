import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useEffect, useState } from "react"

const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [searchText, setSearchText] = useState(q);

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(`?q=${searchText}`);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [searchText, navigate]);

  return (
    <div>
    <form  className="form-control">
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered input-warning  w-24 md:w-auto bg-base-300"
      name="searchText"
      value={searchText}
      onChange={onInputChange}
    />
  </form>
  </div>

  )
}

export default SearchPage