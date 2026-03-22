import { useState } from "react"
import { type Task } from "../types/task"

interface Props {

    task: Task

    tasks: Task[]

    setTasks: (tasks: Task[]) => void

}

export default function TaskItem({ task, tasks, setTasks }: Props) {

    const [isEditing, setIsEditing] = useState(false)

    const [editText, setEditText] = useState(task.title)



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



    const startEditing = () => {

        setIsEditing(true)

    }



    const saveEdit = () => {

        if (!editText.trim()) return

        const updatedTasks = tasks.map((t) =>

            t.id === task.id

                ? { ...t, title: editText }

                : t

        )

        setTasks(updatedTasks)

        setIsEditing(false)

    }



    return (

        <div className="task-item">



            <div className="task-left">

                <input

                    type="checkbox"

                    checked={task.completed}

                    onChange={toggleTask}

                />



                {isEditing ? (

                    <input

                        className="edit-input"

                        value={editText}

                        onChange={(e) => setEditText(e.target.value)}

                    />

                ) : (

                    <span

                        className={task.completed ? "completed" : ""}

                    >

                        {task.title}

                    </span>

                )}

            </div>



            <div className="task-actions">

                {isEditing ? (

                    <button
                        className="save-btn"
                        onClick={saveEdit}
                        title="Save"
                    >
                        ✔
                    </button>

                ) : (

                    <button
                        className="edit-btn"
                        onClick={startEditing}
                        title="Edit"
                    >
                        ✏️
                    </button>

                )}

                <button
                    className="delete-btn"
                    onClick={deleteTask}
                    title="Delete"
                >
                    ✖
                </button>

            </div>



        </div>

    )

}