import React from "react"
import Image from "next/image"
import { MainTaskType } from "@/types"
import SubTask from "./SubTask"

interface TaskProps {
  Task: MainTaskType
}

function Task({ Task: task }: TaskProps) {
  const [isCompleted, setIsCompleted] = React.useState<boolean>(task.completed)

  return (
    <div className="gap-2 px-3 py-2 hover:cursor-pointer">
      <div key={task.id} onClick={() => setIsCompleted(!isCompleted)}>
        <div className="flex  items-center gap-2 ">
          {/*Completion Icon*/}
          {!isCompleted ? (
            <Image
              src="/TaskIcons/NotCompleted.svg"
              alt="Not Completed Task"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src="/TaskIcons/Completed.svg"
              alt="Completed Task"
              width={20}
              height={20}
            />
          )}
          {/*Task Name*/}
          <p className="text-secondary_white-200 text-sm">{task.name}</p>
        </div>
      </div>
      {/*Subtask List if there are*/}
      {task.subtasks.length > 0 ? (
        <div className="mt-2 flex flex-col gap-2">
          {task.subtasks.map((subtask) => {
            return <SubTask subtask={subtask} />
          })}
        </div>
      ) : null}
    </div>
  )
}

export default Task
