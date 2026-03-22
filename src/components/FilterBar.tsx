interface Props {

    filter: string

    setFilter: (value: string) => void

}

export default function FilterBar({ filter, setFilter }: Props) {

    return (

        <div className="filter-bar">

            <button
                onClick={() => setFilter("all")}
                className={filter === "all" ? "active-filter" : ""}
            >
                All
            </button>

            <button
                onClick={() => setFilter("active")}
                className={filter === "active" ? "active-filter" : ""}
            >
                Active
            </button>

            <button
                onClick={() => setFilter("completed")}
                className={filter === "completed" ? "active-filter" : ""}
            >
                Completed
            </button>

        </div>

    )

}