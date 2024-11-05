import { Avaliacao, Card, Descricao, Infos, NotaTitulo, Titulo } from './styles'
import Tag from '../Tag'
import { ButtonLink } from '../Button/styles'
import { LinkItem, Links } from '../Header/styles'
import { Link } from 'react-router-dom'
import star from '../../assets/images/Estrela.png'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  to: string
  avaliation?: number
}

const Product = ({
  title,
  description,
  infos,
  image,
  to,
  avaliation
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <NotaTitulo>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        <h1>{avaliation}</h1> <img src={star} alt="Estrela" />
      </Avaliacao>
    </NotaTitulo>
    <Descricao>{description}</Descricao>
    <Links>
      <LinkItem>
        <Link to={to}>
          <ButtonLink to={to}>Saiba mais</ButtonLink>
        </Link>
      </LinkItem>
    </Links>
  </Card>
)

export default Product
