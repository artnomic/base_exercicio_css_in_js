import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstilosGlobal, { Container } from './styles'
import { theme } from './themes/theme'

// import './global.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EstilosGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
