import { COUNTER_CHANGE } from "./Constant";

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
