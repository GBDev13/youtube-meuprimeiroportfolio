import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    width: 100%;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`;

export const ItemContainer = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 1rem;
  padding-top: 2.5rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  transition: 0.5s;

  &:hover {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) {
    margin-top: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1rem;
    font-weight: 300;
  }
`;
