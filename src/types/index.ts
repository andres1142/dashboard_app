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

export type { Category }
