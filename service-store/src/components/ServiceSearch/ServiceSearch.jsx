import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  clearFilterService,
  filterService,
} from "../../actions/actionCreators";
import "./service_search.css"

const ServiceSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchName, setSearchName] = useState("name")
  const dispatch = useDispatch();

  const handleResetSearch = () => {
    setSearchValue("");
    dispatch(clearFilterService());
    setSearchName("name");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(filterService(searchName, searchValue));
  };

  const handleChangeSearchType = (event) => {
    setSearchName(event.target.value)
  } 

  return (
    <div className="service-search p-3 pb-1">
      <form className="service-search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск сервиса"
            aria-label="Поиск сервиса по атрибуту"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit">
            Поиск
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleResetSearch}
          >
            Сброс
          </button>
        </div>
        <div className="radio-group d-flex gap-2 px-3 py-1">
            <div className="radio-group-title">Поиск по:</div>
          <input
            type="radio"
            name="radio"
            value="name"
            id="search-name"
            checked={searchName == "name" ? true : false}
            onChange={handleChangeSearchType}
          />
          <label htmlFor="search-name">по имени</label>

          <input
            type="radio"
            name="radio"
            value="price"
            id="search-price"
            checked={searchName == "price" ? true : false}
            onChange={handleChangeSearchType}
          />
          <label htmlFor="search-price">по цене</label>
        </div>
      </form>
    </div>
  );
};

export default ServiceSearch;
