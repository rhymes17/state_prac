import { ReactNode } from "react"

interface TodoProps {
    completed ?: boolean,
    createdAt ?: Date | string,
    priority: string,
    todo: string,
    updatedAt?: Date | string,
    _v ?: number,
    _id ?: string,
}

interface ChildrenProps {
    children ?: ReactNode
}

interface TodoContextProps{
    allTodos : TodoProps[],
    visibleTodos : TodoProps[],
    addAllTodos: (todos : TodoProps[]) => void,
    filterVisibleTodos : () => void
}

type HeroWrapperProps = {
    height: number,
    gap: number,
    children ?: ReactNode
}

interface ProductProps {
    brand: string,
    id : number,
    imgUrl ?: string,
    price: number,
    quantity: number,
    title : string,
    description?: string,
    category ?: string,
    images : string[]
}

interface ProductPropsWrapper{
    product : ProductProps
}

interface ReduxStateProps{
    isLoading: boolean,
    products: ProductProps[],
    isError : boolean,
    errorMessage : string,
}

export {TodoProps, ChildrenProps, TodoContextProps, HeroWrapperProps, ProductProps, ProductPropsWrapper, ReduxStateProps}