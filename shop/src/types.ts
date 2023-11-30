export type currencyType = {
    key:string
    value:number
    name:string
}

export type itemType = {
  id: number
  name: string
  price: number
  img?: string;
}

export type itemCartType = itemType & {
  amount: number;
};