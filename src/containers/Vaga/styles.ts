import styled from 'styled-components'

export const VagaList = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.principal};
  background-color: ${({ theme }) => theme.colors.secundaria};
  color: ${({ theme }) => theme.colors.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal};
    color: ${({ theme }) => theme.colors.secundaria};

    a {
      border-color: ${({ theme }) => theme.colors.principal};
      background-color: ${({ theme }) => theme.colors.secundaria};
      color: ${({ theme }) => theme.colors.principal};
    }
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${({ theme }) => theme.colors.secundaria};
  background-color: ${({ theme }) => theme.colors.principal};
  color: ${({ theme }) => theme.colors.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
  }
`
