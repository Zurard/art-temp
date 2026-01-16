// src/api/artApi.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchArtData = async (page = 1, limit = 12) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/data?page=${page}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching art data:', error);
    throw error;
  }
};