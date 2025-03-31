import { useSelector, useDispatch } from "react-redux";
import {
  addService,
  updateService,
  changeServiceField,
  resetServiceForm,
  editServiceState,
} from "@/actions/actionCreators.js";

export default function ServiceForm() {
  const isEditState = useSelector((state) => state.serviceEdit);
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isEditState.isEdit) dispatch(addService(item.name, item.price));
    if (isEditState.isEdit) {
      const service = {
        id: isEditState.serviceId,
        name: item.name,
        price: item.price,
      };
      dispatch(updateService(service));
    }
    dispatch(resetServiceForm());
    dispatch(editServiceState("", false));
  };

  const handleCancelEdit = () => {
    dispatch(resetServiceForm());
    dispatch(editServiceState("", false));
  };

  return (
    <form className="d-flex gap-4 mb-3 p-3 border" onSubmit={handleSubmit}>
      <div className="input-wrapper d-flex gap-3">
        <input
          className="form-control"
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Название сервиса"
          value={item.name}
        />
      
        <input
          className="form-control"
          type="number"
          onChange={handleChange}
          name="price"
          placeholder="Цена"
          value={item.price}
        />
      </div>
      <div className="btn-wrapper d-flex gap-3">
        <button type="submit" className="btn btn-outline-primary">
          {isEditState.isEdit ? "Обновить" : "Добавить"}
        </button>
        {isEditState.isEdit && (
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleCancelEdit}
          >
            Отменить
          </button>
        )}
      </div>
    </form>
  );
}
