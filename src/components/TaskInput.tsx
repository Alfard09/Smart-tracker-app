import { useState } from "react"
import { type Task } from "../types/task";
import { v4 as uuid } from "uuid"

interface Props {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export default function TaskInput({ tasks, setTasks }: Props) {

    const [title, setTitle] = useState("");

    const addTask = () => {

        if (!title.trim()) return;

        const newTask: Task = {
            id: uuid(),
            title: title,
            completed: false
        }

        setTasks([newTask, ...tasks]);

        setTitle("")
    }

    return (
        <div className="input-group">
            <input
                className="task-input"
                placeholder="Add a task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className="add-btn"
                onClick={addTask}>
                Add Task
            </button>

        </div>
    )
}