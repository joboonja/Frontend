export const baseConfig = {
  baseURL: 'http://localhost:8080',
};


export const urlsConfig = {
  users: '/users',
  getProfile: id => `/users/${id}`,
  removeSkill: skillName => `/skills/${skillName}`,
  addSkill: '/skills',
  allSkills: '/endorsableSkills',
  endorse: id => `/skills/${id}`,
  projects: '/projects',
  getProject: id => `/projects/${id}`,
};
