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

  constructor(
    description: string,
    descriptionModal: string,
    serveInfo: string,
    image: string,
    infos: string[],
    title: string,
    id: number,
    to?: string,
    price?: number
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
  }
}

export default Restaurant
