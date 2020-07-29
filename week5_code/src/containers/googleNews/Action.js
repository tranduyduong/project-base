import { FETCH_GOOGLE_NEWS } from "./Constant.js";

export async function getGoogleNews() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe"
  ).then((response) => response.json());

  console.log("response", response);
  return {
    type: FETCH_GOOGLE_NEWS,
    data: response,
  };
}
