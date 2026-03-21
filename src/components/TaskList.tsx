import { type Task } from "../types/task"
import TaskItem from "./TaskItem"

interface Props {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
}

export default function TaskList({ tasks, setTasks }: Props) {

    if (tasks.length === 0) {
        return <p>No tasks yet</p>
    }

    return (
        <div>

            {tasks.map((task) => (
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