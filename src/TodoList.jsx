import TodoListItem from "./TodoListItem";

function TodoList({todoList, onCompleteTodo}) {
    console.log(todoList)
    return (
        <div>
            {todoList.length == 0 ? (
                <p>Add todo above to get started</p>
            ) : (
                <ul>
                    {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo}></TodoListItem>)}
                </ul>
            )}
        </div>
        
    )
}

export default TodoList;