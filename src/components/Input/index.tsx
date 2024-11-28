import React from 'react'
import { InputCampo } from './styles'

type InputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange }: InputProps) => (
  <InputCampo
    placeholder="Front-end, fullstack, node, design"
    onChange={onChange}
    value={value}
    type="search"
  />
)

export default Input
