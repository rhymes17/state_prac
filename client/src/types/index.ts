
interface ITodo {
    completed ?: boolean,
    createdAt ?: Date | string,
    priority: string,
    todo: string,
    updatedAt?: Date | string,
    _v ?: number,
    _id ?: string,
}

interface IProduct {
    brand: string,
    id : number,
    imgUrl ?: string,
    price: number,
    title : string,
    description?: string,
    category ?: string,
    images : string[]
}

interface CartProduct{
    brand: string,
    id : number,
    imgUrl : string,
    quantity : number
    price: number,
    title : string,
    description?: string,
    category ?: string,
}

type ReduxState = {
    isLoading : boolean,
    products : IProduct[],
    isError : boolean,
    errorMessage : string | null,
  }

export type {ITodo,IProduct, ReduxState, CartProduct}