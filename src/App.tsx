import { type Task } from "./types/task"
import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])

  return (

    <div>

      <h1>Smart Task Tracker</h1>

      <TaskInput tasks={tasks} setTasks={setTasks} />

      <TaskList tasks={tasks} setTasks={setTasks} />

    </div>

  )
}

export default App