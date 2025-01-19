export const routes = {
  signup: "/signup",
  login: "/",
  dashboard: "/dashboard",
  advertisementList: "/advertisement",
  createAdvertisement: "/advertisement/create",
  advertisementDetails: (id: string) => `/advertisement/${id}`,
};

export const apiPaths = {
  login: "/api/auth/local",
  signup: "/api/auth/local/register",
  user: "/api/profile",
  adList: "/api/advertisements",
  createAd: "/api/advertisements",
  adDetails: (id: string) => `/api/advertisements/${id}`,
  deleteAd: (id: string) => `/api/advertisements/${id}`,
};
