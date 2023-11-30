import type { currencyType, itemType } from "./types";


export const currencys:currencyType[] = [
  {
    //EURO is reference as 1
    key:"€",
    value:1,
    name:"Euro",
  },
  {
    key:"$",
    value:1.09,
    name:"Dollar",
  },
  {
    key:"£",
    value:0.86,
    name:"Libra",
  },
]




export const items:itemType[] = [
  {
      id:0,
      name:"Hamburguer",
      price:5,
      img:"https://static.wikia.nocookie.net/bobesponja/images/2/27/180px-Kptty.jpg"
    },    {
      id:1,
      name:"Cheesburger",
      price:6
    },    {
      id:2,
      name:"Impossible burger",
      price:7
    },    {
      id:3,
      name:"Fries",
      price:2,
      img:"https://www.tastingtable.com/img/gallery/the-unexpected-method-mcdonalds-originally-used-to-make-its-iconic-fries/intro-1667777280.webp"
    }
  ]
