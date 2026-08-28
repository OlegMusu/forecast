const API_KEY = "56382516-64a69418319801ecbd97e992c";
const BASE_URL = "https://pixabay.com/api/";

export const GalleryImages = async (searchWord, page = 1) => {
  const response = await fetch(
    (`${BASE_URL}?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&page=${page}&per_page=10`)
  );

  if (!response.ok) {
    throw new Error("Не удалось загрузить изображения")
  }

  return response.json();
}