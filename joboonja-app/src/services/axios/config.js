/* eslint-disable prefer-template */
export const baseConfig = {
  baseURL: 'http://localhost:8080',
};

export const tokenConfig = {
  localStorageKey: 'token',
};

export const urlsConfig = {
  users: search => '/users' + (search ? `?search=${search}` : ''),
  getProfile: id => `/users/${id}`,
  removeSkill: skillName => `/skills/${skillName}`,
  bidOnProject: '/bids',
  addSkill: '/skills',
  allSkills: '/endorsableSkills',
  endorse: id => `/skills/${id}`,
  projects: (pageNumber, search = '') => {
    let url = `/projects?pageNumber=${pageNumber}`;
    if (search) url += `&search=${search}`;
    return url;
  },
  getProject: id => `/projects/${id}`,
  login: '/login',
};
