// Centered API configuration for the Talent Portal
// In development, this uses relative paths (handled by vite.config.js proxy)
// In production, set VITE_API_BASE_URL to your Render backend URL (e.g., https://backend.onrender.com)

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Utility for forming full API URLs
export const getApiUrl = (endpoint) => {
  const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
};
