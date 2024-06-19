import { useState } from "react"

export default function App(){
  //lista de todos 
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("") // control de input 

  function addTodo(){
    setTodos([...todos, text])
  }

  function onSubmit(event){
    event.preventDefault() //elimina comprtamiento por default para no recargar pagina
    addTodo(); // al acer clivk realiza evento de agregar
    setText(""); // limpia input 
  }

  function removeTodo(indexToRemove){
    /*todos.splice(indexToRemove, 1)
    setTodos([... todos])*/

    const newTodos = todos.filter((todo, idx)=> idx != indexToRemove);
    setTodos(newTodos);
  }

  

  return(
    <main className="w-full min-h-screen">
      <form 
      className="flex flex-row justify-center p-5 gap-2"
      onSubmit={onSubmit}
      >
        <input 
        type="text" 
        placeholder="Ingresa una tarea"
        className="p-2 rounded text-black w-full max-w-screen-sm"
        value={text}
        onChange={(event)=>setText(event.target.value)} //para actualizar el valor del estado del imput se usa evento, usa funcion 
        required
        />
        <button 
        className="bg-white text-black px-3 rounded"
        >Agregar</button>

      </form>

      <div className="mt-7 font-sans max-w-screen-sm w-full mx-auto flex flex-col justify-center gap-1">
        {todos.length === 0 && (
          <p className="text-white/50 ">No tienes tareas pendientes</p>
        )}
        {
          todos.length > 0 && 
            todos.map((todo, idx)=>{
              return(
                <div 
                key={`todo-${idx}`}
                className="bg-white/10 rounded p-4 flex flex-row justify-between "
                >
                  <span className="select-none">
                    {todo}
                  </span>
                  <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-0 size-5 text-center items-center text-sm" 
                  onClick={()=>removeTodo(idx)}>X</span>
                </div>
              )
            })
        }

      </div>

    </main>
  )
}
