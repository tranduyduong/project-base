import { COUNTER_CHANGE } from "../constants";
export function changeCount(count) {
  const response = fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe"
  );

  console.log("response", response);
  return {
    type: COUNTER_CHANGE,
    payload: count,
    data: response,
  };
}
