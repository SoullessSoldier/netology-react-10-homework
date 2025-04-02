import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  UPDATE_SERVICE,
  FILTER_SERVICE,
  CLEAR_FILTER_SERVICE
} from "@/actions/actions";

const initialState = {
  services: [
    { id: nanoid(), name: "Замена стекла", price: 6100 },
    { id: nanoid(), name: "Замена дисплея", price: 9800 },
  ],
  filter: {
    name: "",
    value: "",
  },
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        services: [
          ...state.services,
          {
            id: nanoid(),
            name: action.payload.name,
            price: Number(action.payload.price),
          },
        ],
      };
    case REMOVE_SERVICE:
      return {
        ...state,
        services: [
          ...state.services.filter(
            (service) => service.id !== action.payload.id
          ),
        ],
      };
    case UPDATE_SERVICE:
      // eslint-disable-next-line no-case-declarations
      const serviceIndex = state.services.findIndex(
        (item) => item.id === action.payload.service.id
      );
      // eslint-disable-next-line no-case-declarations
      const newStateServices = [...state.services];
      if (serviceIndex > -1) {
        newStateServices[serviceIndex].name = action.payload.service.name;
        newStateServices[serviceIndex].price = Number(
          action.payload.service.price
        );
      }
      return { ...state, services: newStateServices };
    case FILTER_SERVICE:
      return { ...state, filter: { ...state.filter, ...action.payload } };
    case CLEAR_FILTER_SERVICE:
      return { ...state, filter: { name: "", value: "" } };

    default:
      return state;
  }
}
