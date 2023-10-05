import { type } from "os"

export default interface AuthenticationProps {
  setShowLogin: (value: boolean) => void
}

// Type for the category object
interface Category {
  name: string
  color: string
}

export type { Category }
