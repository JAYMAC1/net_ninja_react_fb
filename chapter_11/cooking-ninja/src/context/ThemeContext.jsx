import { createContext } from 'react'

// Context provider component
export const ThemeContext = createContext()

// Easy to incorporate custom logic

export function ThemeProvider({ children }) {
  return <ThemeContext value={{ color: 'blue' }}>{children}</ThemeContext>
}
