class Restaurant {
  description: string
  descriptionModal: string
  serveInfo: string
  image: string
  infos: string[]
  to?: string
  title: string
  id: number
  price?: number
  avaliation?: number

  constructor(
    description: string,
    descriptionModal: string,
    serveInfo: string,
    image: string,
    infos: string[],
    title: string,
    id: number,
    to?: string,
    price?: number,
    avaliation?: number
  ) {
    this.description = description
    this.descriptionModal = descriptionModal
    this.serveInfo = serveInfo
    this.image = image
    this.infos = infos
    this.title = title
    this.id = id
    this.to = to
    this.price = price
    this.avaliation = avaliation
  }
}

export default Restaurant
