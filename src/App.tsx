import { type Task } from "./types/task"
import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])

  return (

    <div className="app-bg">

      <div className="container">

        <h1 className="title">
          Smart Task Tracker
        </h1>

        <TaskInput tasks={tasks} setTasks={setTasks} />

        <TaskList tasks={tasks} setTasks={setTasks} />

      </div>

    </div>

  )
}

export default App