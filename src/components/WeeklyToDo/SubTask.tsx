import { TaskType } from "@/types"
import { useState } from "react"
import Image from "next/image"

interface TaskProps {
  subtask: TaskType
}

function SubTask({ subtask }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(subtask.completed)

  return (
    <div
      className=" ml-6 flex items-center  gap-2"
      key={subtask.id}
      onClick={() => setIsCompleted(!isCompleted)}
    >
      {/*Completion Icon for Subtask*/}
      {!isCompleted ? (
        <Image
          src="/TaskIcons/NotCompleted.svg"
          alt="Not Completed Task"
          width={17}
          height={17}
        />
      ) : (
        <Image
          src="/TaskIcons/Completed.svg"
          alt="Completed Task"
          width={17}
          height={17}
        />
      )}
      {/*Task Name*/}
      <p className="text-secondary_white-200 text-sm">{subtask.name}</p>
    </div>
  )
}

export default SubTask
