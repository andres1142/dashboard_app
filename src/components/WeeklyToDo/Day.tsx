"use client"
import { MainTaskType } from "@/types"
import React from "react"
import Task from "./Task"

interface DayProps {
  day: string
  tasks: MainTaskType[]
}

function Day({ day, tasks }: DayProps) {
  return (
    <div
      className="h-3/6 w-[22%] bg-secondary_gray-100 border-[0.5px] border-secondary_white-200"
      onDoubleClick={() => {
        alert(`You double clicked ${day}`)
      }}
    >
      <h3 className="text-secondary_white-200 text-2xl text-center font-motivaRegular py-3 border-b-[0.5px] border-secondary_white-200">
        {day}
      </h3>
      <div className="h-5/6 overflow-y-auto p-2">
        {tasks.map((task) => {
          return <Task Task={task} />
        })}
      </div>
    </div>
  )
}

export default Day
