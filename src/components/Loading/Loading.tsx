import loadingIcon from '../../assets/LoadingIcon.svg';
import LoadingImage from './Loading.styled';

function Loading() {
  return (
    <div>
      <LoadingImage src={loadingIcon} alt="로딩중" />
    </div>
  );
}

export default Loading;
