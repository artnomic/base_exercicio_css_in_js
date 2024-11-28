import styled from 'styled-components'

export const CabecalhoEstilizado = styled.header`
  background-color: ${({ theme }) => theme.colors.secundaria};
  color: ${({ theme }) => theme.colors.principal};
  text-align: center;
  padding: 24px 0;
`
