import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { allSkillsReqSent, allSkillsReqErr, allSkillsReqSuccess } = createActions(
  'ALL_SKILLS_REQ_SENT',
  'ALL_SKILLS_REQ_ERR',
  'ALL_SKILLS_REQ_SUCCESS',
);
export function requestForAllSkill() {
  return (dispatch) => {
    dispatch(allSkillsReqSent());
    Axios.get(urlsConfig.allSkills)
      .then((response) => {
        dispatch(allSkillsReqSuccess({ skills: response.data }));
      })
      .catch((error) => {
        dispatch(allSkillsReqErr(error));
      });
  };
}
