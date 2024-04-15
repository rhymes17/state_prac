import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../axiosFunctions";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate()

const queryClient = useQueryClient()

const {mutate: addTodoMutate} = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
        navigate('/todos');
        queryClient.invalidateQueries({queryKey : ["todos"]})
    }
})

export {addTodoMutate}