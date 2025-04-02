import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  UPDATE_SERVICE,
  CHANGE_SERVICE_FIELD,
  RESET_SERVICE_FORM,
  EDIT_SERVICE_FORM,
  EDIT_SERVICE_STATE,
  FILTER_SERVICE,
  CLEAR_FILTER_SERVICE,
} from "./actions";

export function addService(name,price) {
    return {type: ADD_SERVICE, payload: {name, price}}
}

export function removeService(id) {
    return {type: REMOVE_SERVICE, payload: {id}}
}
export function updateService(service) {
  return { type: UPDATE_SERVICE, payload: { service } };
}

export function changeServiceField(name, value) {
    return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function resetServiceForm() {
  return { type: RESET_SERVICE_FORM };
}

export function editServiceForm(name, price) {
  return { type: EDIT_SERVICE_FORM, payload: { name, price } };
}

export function editServiceState(serviceId, isEdit) {
  return { type: EDIT_SERVICE_STATE, payload: { serviceId, isEdit: isEdit } };
}

export function filterService(name, value) {
  return { type: FILTER_SERVICE, payload: { name, value } };
}

export function clearFilterService(name, value) {
  return { type: CLEAR_FILTER_SERVICE, payload: { name, value } };
}

