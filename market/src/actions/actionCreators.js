import {
  ADD_ITEM
} from "./actions";

export function addItem(payload) {
    return {type: ADD_ITEM, payload}
}