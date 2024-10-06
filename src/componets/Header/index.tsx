import { HeaderBar, Logo, Titulo } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <nav>
      <Logo src={logo} alt="eFood" />
    </nav>
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header
