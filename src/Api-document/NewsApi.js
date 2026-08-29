const API_KEY = "17359e3946544e06bf0a76d07975bc88";
const BASE_URL = "https://newsapi.org/v2/everything";

export const NewsApi = async (query, page = 1) => {
  const response = await fetch(
    (`${BASE_URL}?apiKey=${API_KEY}&q=${encodeURIComponent(query)}&page=${page}&pageSize=10`)
  );

  if (!response.ok) {
    throw new Error(`Ошибка API: ${response.status}`);
  }

  return response.json();
}