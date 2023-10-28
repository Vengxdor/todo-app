/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

// 1. Set The context
export const TasksContext = createContext()

// 2. Provide the Context
export function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks')) // if there's Tasks in the local storage the state will be those tasks
    return storageTasks || []
  })
  const [error, setError] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <TasksContext.Provider value={{ tasks, setTasks, error, setError }}>
      {children}
    </TasksContext.Provider>
  )
}
