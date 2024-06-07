import './App.css'
import Container from './components/frames/container'
import LayoutFull from './components/frames/layout'
import Menu from './components/header/menu'
import HomePage from './pages/home'

function App() {
  return (
    <LayoutFull>
      <Menu />
      <Container>
        <HomePage />
      </Container>
    </LayoutFull>
  )
}

export default App
