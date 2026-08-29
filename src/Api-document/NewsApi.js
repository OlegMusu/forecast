const API_KEY = "17359e3946544e06bf0a76d07975bc88";
const BASE_URL = "https://newsapi.org/v2/everything";
export const NewsApi = async (query, page = 1) => {
  const params = new URLSearchParams({
    apiKey: API_KEY,
    q: query,
    page: page.toString(),
    pageSize: "10",
    language: "en",
    sortBy: "publishedAt",
  });
  const response = await fetch(`${BASE_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }
  const data = await response.json();
  if (data.status !== "ok") {
    throw new Error(data.message || "News API error");
  }
  return data;
};
