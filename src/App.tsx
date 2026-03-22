import { type Task } from "./types/task"
import { useLocalStorage } from "./hooks/useLocalStorage"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"
import "./App.css"
import { useEffect, useState } from "react"
import FilterBar from "./components/FilterBar"

function App() {

  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [])
  const [filter, setFilter] = useState("all")
  useEffect(() => {

    const blobs = document.querySelectorAll(".blob")

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const positions = Array.from(blobs).map(() => ({
      x: mouseX,
      y: mouseY
    }))

    window.addEventListener("mousemove", (e) => {

      mouseX = e.clientX
      mouseY = e.clientY

    })

    function animate() {

      blobs.forEach((blob, index) => {

        const speed = index === 0 ? 0.05 : 0.02

        positions[index].x += (mouseX - positions[index].x) * speed
        positions[index].y += (mouseY - positions[index].y) * speed

          ; (blob as HTMLElement).style.transform =
            `translate(${positions[index].x}px, ${positions[index].y}px)`

      })

      requestAnimationFrame(animate)

    }

    animate()

  }, [])

  return (

    <div className="app-bg">
      <div className="blob"></div>
      <div className="blob blob2"></div>
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