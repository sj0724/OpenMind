import PropTypes from 'prop-types';
import { useEffect } from 'react';

import * as S from './Toast.styled';

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <S.ToastBody>
      <p>{text}</p>
    </S.ToastBody>
  );
}

Toast.propTypes = {
  setToast: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Toast;
