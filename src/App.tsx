import { type Task } from "./types/task"
import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./App.css"
import { useState } from "react"
import FilterBar from "./components/FilterBar"

function App() {

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])
  const [filter, setFilter] = useState("all")

  return (

    <div className="app-bg">

      <div className="container">

        <h1 className="title">
          Smart Task Tracker
        </h1>

        <TaskInput tasks={tasks} setTasks={setTasks} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />

      </div>

    </div>

  )
}

export default App