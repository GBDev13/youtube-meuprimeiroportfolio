import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
    }

    button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      transition: 0.5s;
      margin-top: 2rem;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }

      a {
        text-transform: uppercase;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }
  }
`;
