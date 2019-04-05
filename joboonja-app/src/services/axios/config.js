export const baseConfig = {
  baseURL: 'http://localhost:8080',
};


export const urlsConfig = {
  getProfile: id => `/users/${id}`,
  removeSkill: skillName => `/skills/${skillName}`,
};
