import styled from 'styled-components'

export const BtnPesquisar = styled.button`
  background-color: ${({ theme }) => theme.colors.principal};
  border: 1px solid ${({ theme }) => theme.colors.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Forms = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.colors.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
