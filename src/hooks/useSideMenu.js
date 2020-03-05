import { useState, useCallback } from 'react'

const useSideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  
  const toggleSideMenu = useCallback(() => {
    setIsCollapsed(!isCollapsed)
  }, [isCollapsed])
  
  return {
    isCollapsed,
    toggleSideMenu
  }
}

export default useSideMenu