import { ReactNode } from "react"

interface TodoProps {
    completed : boolean,
    createdAt : Date | string,
    priority: string,
    todo: string,
    updatedAt: Date | string,
    _v : number,
    _id : string,
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

export {TodoProps, ChildrenProps, TodoContextProps, HeroWrapperProps}