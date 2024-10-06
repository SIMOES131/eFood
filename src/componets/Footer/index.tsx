import { FooterBar, Logo, P, SocialMedia, SocialMediaImage } from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <>
    <FooterBar>
      <Logo src={logo} alt="eFood" />
      <SocialMedia>
        <SocialMediaImage src={facebook} alt="Facebook" />
        <SocialMediaImage src={instagram} alt="Instagram" />
        <SocialMediaImage src={twitter} alt="Twitter" />
      </SocialMedia>
      <P>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </P>
    </FooterBar>
  </>
)

export default Footer
