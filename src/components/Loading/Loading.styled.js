import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const LoadingImage = styled.img`
  animation: ${rotation} 2s linear infinite;
  width: 100px;
  height: 100px;
`;

export default LoadingImage;
