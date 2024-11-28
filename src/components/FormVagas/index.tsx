import { FormEvent, useState } from 'react'
import { BtnPesquisar, Forms } from './styles'
import InputCampo from '../Input'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Forms onSubmit={aoEnviarForm}>
      <InputCampo value={termo} onChange={(e) => setTermo(e.target.value)} />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Forms>
  )
}

export default FormVagas
