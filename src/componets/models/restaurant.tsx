class Restaurant {
  description: string
  image: string
  infos: string[]
  to?: string
  title: string
  id: number

  constructor(
    description: string,
    image: string,
    infos: string[],
    title: string,
    id: number,
    to?: string
  ) {
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.id = id
    this.to = to
  }
}

export default Restaurant
