import { nanoid } from "nanoid";
import { ADD_ITEM } from "@/actions/actions";

const initialState = {
  items: [
    {
      id: nanoid(),
      dateCreated: new Date("2024-04-01"),
      name: "Футболка Us Basic",
      image: "/store/img/t_shirt_us_basic_240x320_multiply.webp",
      price: 1389,
      discount: 10,
    },
  ],
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: nanoid(),
            dateCreated: new Date(),
            name: action.payload.name,
            price: Number(action.payload.price),
            discount: Number(action.payload?.discount || 0),
            image: action.payload.image,
          },
        ],
      };
    default:
      return state;
  }
}
