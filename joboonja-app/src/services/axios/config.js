export const baseConfig = {
  baseURL: 'http://localhost:8080',
};


export const urlsConfig = {
  getProfile: id => `/users/${id}`,
  removeSkill: skillName => `/skills/${skillName}`,
  addSkill: '/skills',
  allSkills: '/endorsableSkills',
  endorse: id => `/skills/${id}`,
  getProject: id => `/projects/${id}`,
};
