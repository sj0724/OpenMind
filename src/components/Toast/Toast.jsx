import { useEffect } from "react";
import * as S from "./Toast.styled";

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

export default Toast;
