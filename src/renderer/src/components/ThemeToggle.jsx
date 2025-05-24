// Import React hooks for state and side effects
import { useEffect, useState } from 'react'

// Component for toggling between light/dark themes
const ThemeToggle = () => {
  // State to track dark mode, initialized from localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  // Effect to apply theme changes to document and localStorage
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  // Render theme toggle button
  return (
    <button
      className="button"
      onClick={() => setIsDark((prev) => !prev)}
      style={{ marginTop: 'auto' }}
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}

export default ThemeToggle
