import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  editServiceForm,
  editServiceState,
} from "@/actions/actionCreators";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const isEditState = useSelector((state) => state.serviceEdit);
  const dispatch = useDispatch();

  const onServiceEdit = (service) => {
    const {id, name, price} = service;
    dispatch(editServiceForm(name, price));
    dispatch(editServiceState(id, true));
  };

  const onServiceDelete = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul className="border p-3">
      {items.map((item) => (
        <ServiceCard
          key={item.id}
          data={item}
          onServiceEdit={onServiceEdit}
          onServiceDelete={onServiceDelete}
          isEdit={isEditState.isEdit}
        />
      ))}
    </ul>
  );
}
