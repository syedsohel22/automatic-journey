import { ADD_TO_WATCHLIST } from "./actionTypes";
const initalstate = {
  watchList: [],
};
export const reducer = (state = initalstate, { type, payload }) => {
  // Complete the logic
  switch (type) {
    case ADD_TO_WATCHLIST:
      return { ...state, watchList: payload };
    default:
      return state;
  }
};
