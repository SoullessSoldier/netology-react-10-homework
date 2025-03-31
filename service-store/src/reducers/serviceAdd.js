import { CHANGE_SERVICE_FIELD, RESET_SERVICE_FORM, EDIT_SERVICE_FORM } from "@/actions/actions";

const initialState = { name: "", price: "" };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      // eslint-disable-next-line no-case-declarations
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case RESET_SERVICE_FORM:
      return {...state, name: "", price: ""}
    case EDIT_SERVICE_FORM:
      // eslint-disable-next-line no-case-declarations
      const {name: nameEdit, price: priceEdit} = action.payload
      return { ...state, name: nameEdit, price: priceEdit };      
    default:
      return state;
  }
}
