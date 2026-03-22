import { type Task } from "../types/task"
import TaskItem from "./TaskItem"

interface Props {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void,
    filter: string
}

export default function TaskList({ tasks, setTasks, filter }: Props) {

    const filteredTasks = tasks.filter((task) => {

        if (filter === "active") {

            return !task.completed

        }

        if (filter === "completed") {

            return task.completed

        }

        return true

    })

    if (filteredTasks.length === 0) {
        return <p>No tasks yet</p>
    }

    return (
        <div>

            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            ))}

        </div>
    )
}