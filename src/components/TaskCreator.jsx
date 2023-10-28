import React, { useContext, useState } from 'react'
import { TasksContext } from '../context/TasksContext'
export default function TaskCreator () {
  const { tasks, setTasks, setError, error } = useContext(TasksContext)

  const blankTask = {
    text: '',
    checked: false,
    id: ''
  }

  const [taskText, updateTask] = useState(blankTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.text === '') return
    if (taskText.text.length <= 3) {
      setError('Your task needs to have more than 3 characters')
      return
    }
    setTasks([...tasks, taskText])
    updateTask(blankTask)
    setError('')
  }

  const handleChange = (e) => {
    updateTask({
      text: e.target.value,
      checked: false,
      id: Date.now()
    })
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='creator'>
        <input
          value={taskText.text}
          onChange={(e) => handleChange(e)}
          className='creator__inp'
          type='text'
          id='addTaks'
          placeholder='Enter task...'
          autoComplete='off'
        />
        <button className='creator__btn' type='submit'>
          Add Task
        </button>
      </div>
      <span style={{ color: 'red' }}>{error}</span>
    </form>
  )
}
