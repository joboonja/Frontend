export const baseConfig = {
  baseURL: '127.0.0.1',
};


export const urlsConfig = {
  getProfile: id => (id === -1 ? '/profile' : `/profile/${id}`),
};
