
interface Ipiza {
  title: string
  image: string
  price: number
  weight: number
}

export const dataPiza: Ipiza[] = [
  {
    image: require('../assets/catalog/1.jpg'),
    title: 'Піца Гавайська',
    price: 162,
    weight: 280,
  },
  {
    image: require('../assets/catalog/2.jpg'),
    title: 'Піца Цезара',
    price: 186,
    weight: 330,
  },
  {
    image: require('../assets/catalog/3.jpg'),
    title: 'Піца Пепероні',
    price: 148,
    weight: 120,
  },
  {
    image: require('../assets/catalog/4.jpg'),
    title: 'Піца з копченою куркою',
    price: 205,
    weight: 300,
  },
  {
    image: require('../assets/catalog/5.jpg'),
    title: 'Піца Д`явола',
    price: 255,
    weight: 350,
  },
  {
    image: require('../assets/catalog/6.jpg'),
    title: 'Піца Салямі',
    price: 110,
    weight: 320,
  },
]