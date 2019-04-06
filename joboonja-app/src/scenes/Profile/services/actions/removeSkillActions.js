import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { removeSkillError, removeSkillSent, removeSkillSuccess } = createActions(
  'REMOVE_SKILL_ERROR',
  'REMOVE_SKILL_SENT',
  'REMOVE_SKILL_SUCCESS',
);
export function requestForRemoveSkill(skill) {
  return (dispatch) => {
    dispatch(removeSkillSent(skill));
    Axios.delete(urlsConfig.removeSkill(skill.name))
      .then(() => {
        dispatch(removeSkillSuccess(skill.name));
      })
      .catch((error) => {
        dispatch(removeSkillError({ error, skill }));
      });
  };
}
