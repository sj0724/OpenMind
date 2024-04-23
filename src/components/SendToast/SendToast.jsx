// SendToast 컴포넌트
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ToastBody from './SendToast.styled';

function SendToast({ setToast, text, index }) {
  const [fade, setFade] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  useEffect(() => {
    const a = setTimeout(() => {
      setFade('fade');
    }, 100);

    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <ToastBody className={fade} $top={`${(index + 1) * 6 - 4}rem`}>
      <p>{text}</p>
    </ToastBody>
  );
}

SendToast.propTypes = {
  setToast: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SendToast;
