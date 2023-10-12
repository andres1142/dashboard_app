import React from "react"
import Day from "./Day"
import daysData from "."

function WeeklyToDo() {
  const data = Array.from(daysData.days)

  return (
    <div className="w-screen mx-24">
      {/*Header*/}
      <div className="flex flex-initial justify-between items-center mt-20">
        {/*Title and Button container*/}
        <div className="flex items-center gap-5">
          <h3 className="text-secondary_white-200 text-6xl font-motivaRegular">
            My Week
          </h3>
          <button
            className="w-12 h-5 text-secondary_white text-sm bg-secondary_pink rounded-lg hover:shadow-lg 
                    hover:shadow-secondary_pink/25 hover:cursor-pointer"
          >
            Help
          </button>
        </div>
        <button className="form-button w-32">Add Task</button>
      </div>

      {/*Body that contains 7 containers for days and 1 for categories*/}
      <div className="h-full flex justify-between flex-wrap gap-7 mt-20">
        {
          // For each day in data.days, render a Day component
          data.map((day) => {
            return <Day day={day.day} tasks={day.tasks} />
          })
        }
      </div>
    </div>
  )
}

export default WeeklyToDo
