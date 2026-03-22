import { type Task } from "../types/task"

interface Props {
    task: Task
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
}

export default function TaskItem({ task, tasks, setTasks }: Props) {
    const toggleTask = () => {

        const updatedTasks = tasks.map((t) =>
            t.id === task.id
                ? { ...t, completed: !t.completed }
                : t
        )

        setTasks(updatedTasks)
    }

    const deleteTask = () => {
        const updatedTasks = tasks.filter(
            (t) => t.id !== task.id
        )
        setTasks(updatedTasks)
    }

    return (
        <div className="task-item">
            <span
                onClick={toggleTask}
                className={`task-text ${task.completed ? "completed" : ""}`}
            >
                {task.title}
            </span>

            <button
                className="delete-btn"
                onClick={deleteTask}
            >
                ✕
            </button>
        </div>
    )
}