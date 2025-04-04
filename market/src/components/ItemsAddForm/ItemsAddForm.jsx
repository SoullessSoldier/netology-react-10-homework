import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem
} from "@/actions/actionCreators.js";
import "./items_add_form.css"

export default function ItemAddForm() {
  const [isDiscount, setIsDiscount] = useState(false);
  const dispatch = useDispatch();
  const handleIsDiscountChange = (event) => {
    setIsDiscount(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const formData = new FormData(target);
    const price = parseFloat(formData.get("price"));
    const discount = parseInt(formData.get("discount")) || 0;
    const payload = {...Object.fromEntries(formData), price, discount};
    dispatch(addItem(payload));
    setIsDiscount(false)
    target.reset();  
  }

  const handleClear = (event) => {
    const form = event.target.closest("form");
    event.preventDefault();
    setIsDiscount(false);
    form.reset();
  };

  return (
    <div className="container pb-3">
      <h1 className="text-center">Добавление товаров</h1>
      <form
        className="form p-3 border d-flex flex-column gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          required
          className="form-control"
          placeholder="Название товара"
        />
        <input
          type="number"
          name="price"
          required
          className="form-control"
          placeholder="Цена товара"
          min={0}
        />
        <div className="form-control-wrapper d-flex align-items-center justify-content-start gap-3">
          <input
            type="checkbox"
            name="isDiscount"
            id="is-discount"
            className="form-check-input"
            checked={isDiscount}
            onChange={handleIsDiscountChange}
          />
          <label htmlFor="is-discount" className="form-check-label">
            Есть&nbsp;скидка
          </label>

          <input
            type="number"
            name="discount"
            min={0}
            defaultValue={0}
            required
            disabled={!isDiscount}
            className="form-control"
            placeholder="Скидка на товар"
          />
        </div>
        <input
          type="text"
          name="image"
          required
          className="form-control"
          placeholder="Картинка товара"
        />
        <div className="form-control-btn-wrapper d-flex align-items-center justify-content-center gap-4">
          <button type="submit" className="btn btn-outline-primary">
            Добавить товар
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleClear}
          >
            Сброс данных
          </button>
        </div>
      </form>
    </div>
  );
}
