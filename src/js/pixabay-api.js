import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const limit = 15;

export async function searchImages(query, page) {
  const API_KEY = '45326372-cb2430b3eb7244718740f39d3';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    per_page: limit,
    page,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  try {
    const response = await axios.get(`?${searchParams}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
