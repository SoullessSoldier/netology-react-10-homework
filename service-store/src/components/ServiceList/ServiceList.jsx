import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  editServiceForm,
  editServiceState,
} from "@/actions/actionCreators";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import ServiceSearch from "@/components/ServiceSearch/ServiceSearch";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList.services);
  const filter = useSelector((state) => state.serviceList.filter);
  const isEditState = useSelector((state) => state.serviceEdit);
  const dispatch = useDispatch();

  const filteredItems = (items, filter) => {
    if (filter.name === "" || filter.value === "") return items;
    return items.filter((item) =>
      String(item[filter.name])
        .toLowerCase()
        .includes(String(filter.value).toLowerCase())
    );
  };

  const onServiceEdit = (service) => {
    const { id, name, price } = service;
    dispatch(editServiceForm(name, price));
    dispatch(editServiceState(id, true));
  };

  const onServiceDelete = (id) => {
    dispatch(removeService(id));
  };

  return (
    <div className="border">
      <ServiceSearch />
      <ul className="p-3 pt-2">
        {filteredItems(items, filter).map((item) => (
          <ServiceCard
            key={item.id}
            data={item}
            onServiceEdit={onServiceEdit}
            onServiceDelete={onServiceDelete}
            isEdit={isEditState.isEdit}
          />
        ))}
      </ul>
    </div>
  );
}
