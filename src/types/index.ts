import { type } from "os"

export default interface AuthenticationProps {
  setShowLogin: (value: boolean) => void
}

// Type for the category object
interface Category {
  id: number
  name: string
  color: string
}

// Type for the task object
interface TaskType {
  id: number
  name: string
  categoryId: number
  completed: boolean
}

interface MainTaskType extends TaskType {
  subtasks: TaskType[]
}

export type { Category, MainTaskType, TaskType }
