import './TodoList.css'

const TodoList = (props) => {
    console.log(props)
    return (
        <ul>{
            props.dataTodos.map((todo) => {
                // {id: 1, title: "Baris Satu"}
                return <li key={todo.id}>
                    {todo.title}
                </li>

            }
            )
        }</ul>
    )
}


export default TodoList