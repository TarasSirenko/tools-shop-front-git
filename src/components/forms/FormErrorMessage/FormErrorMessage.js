import { Fragment } from 'react';
import s from './FormErrorMessage.module.css';

function FormErrorMessage({ errorText }) {
  return (
    <p className={s.errorMessage}>
      {errorText.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </p>
  );
}

export default FormErrorMessage;
