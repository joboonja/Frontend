export const baseConfig = {
  baseURL: 'http://localhost:8080',
};


export const urlsConfig = {
  users: '/users',
  getProfile: id => `/users/${id}`,
  removeSkill: skillName => `/skills/${skillName}`,
  bidOnProject: '/bids',
  addSkill: '/skills',
  allSkills: '/endorsableSkills',
  endorse: id => `/skills/${id}`,
  projects: pageNumber => `/projects?pageNumber=${pageNumber}`,
  getProject: id => `/projects/${id}`,
};
