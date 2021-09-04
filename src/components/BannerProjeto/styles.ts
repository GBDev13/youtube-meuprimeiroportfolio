import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  section {
    z-index: 2;
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }
    h2 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 300;
      font-size: 2rem;
    }
  }

  > div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.8;
  }
`;
