import React from 'react';
import '../../../../components/Inputs/SimpleInput/styles.scss';
import { errors } from '../../../../services/toast/config';

function NotEmptyError() {
  return (
    <div>
      <p className="sampleInputError">{errors.FIELD_EMPTY}</p>
    </div>
  );
}
export default NotEmptyError;
