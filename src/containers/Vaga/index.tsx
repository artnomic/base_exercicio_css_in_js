import { VagaList, VagaTitulo, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: Props) => (
  <VagaList>
    <VagaTitulo>{titulo}</VagaTitulo>
    <ul aria-label="Detalhes da vaga">
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: R$ {salarioMin.toLocaleString()} - R${' '}
        {salarioMax.toLocaleString()}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#apply">Ver detalhes e candidatar-se</VagaLink>
  </VagaList>
)

export default Vaga
