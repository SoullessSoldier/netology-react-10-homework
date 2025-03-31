import {nanoid} from "nanoid"
import {ADD_SERVICE, REMOVE_SERVICE, UPDATE_SERVICE} from "@/actions/actions";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 6100 },
  { id: nanoid(), name: "Замена дисплея", price: 9800 },
];

export default function serviceListReducer(state=initialState, action) {
    switch (action.type) {
      case ADD_SERVICE: {
        const { name, price } = action.payload;
        return [...state, { id: nanoid(), name, price: Number(price) }];
      }
      case REMOVE_SERVICE:
        // eslint-disable-next-line no-case-declarations
        const { id } = action.payload;
        return state.filter((service) => service.id !== id);
      case UPDATE_SERVICE:
        // eslint-disable-next-line no-case-declarations
        const { service } = action.payload;
        // eslint-disable-next-line no-case-declarations
        const serviceIndex = state.findIndex((item) => item.id === service.id)
        // eslint-disable-next-line no-case-declarations
        const newState = [...state];
        if (serviceIndex > -1) {
            newState[serviceIndex].name = service.name
            newState[serviceIndex].price = Number(service.price)
        }
        return newState;
      default:
        return state;
    }
}