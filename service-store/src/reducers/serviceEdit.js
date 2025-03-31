import {
  EDIT_SERVICE_STATE
} from "@/actions/actions";

const initialState = { serviceId: "", isEdit: false };

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE_STATE:
      // eslint-disable-next-line no-case-declarations
      const { serviceId, isEdit } = action.payload;
      return { ...state, serviceId, isEdit };
    default:
      return state;
  }
}
