import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { addSkillReqSent, addSkillReqError, addSkillReqSuccess } = createActions(
  'ADD_SKILL_REQ_SENT',
  'ADD_SKILL_REQ_ERR',
  'ADD_SKILL_REQ_SUCCESS',
);

export function requestForAddSkill(skillName) {
  return (dispatch) => {
    dispatch(addSkillReqSent(skillName));
    Axios.post(urlsConfig.addSkill, { skillName })
      .then((response) => {
        dispatch(addSkillReqSuccess({ skills: response.data, skillName }));
      })
      .catch((error) => {
        dispatch(addSkillReqError({ error, skillName }));
      });
  };
}
