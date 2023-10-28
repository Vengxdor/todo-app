import React, { useContext } from 'react'
import TrashIcon from './TrashIcon'
import { TasksContext } from '../context/TasksContext'

export default function Tasks () {
  const { tasks, setTasks } = useContext(TasksContext)// tasks return an array of objects with the text is checked and an ID

  const handleChecked = (index) => {
    const updateTasks = [...tasks]
    const currentTasks = updateTasks[index]
    currentTasks.checked = !currentTasks.checked

    setTasks(updateTasks)
  }

  const handleRemove = (index) => {
    const updateTasks = [...tasks]
    updateTasks.splice(index, 1)

    setTasks(updateTasks)
  }
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={task.id} className='task'>
          <div className='task__info'>
            <input
              id={task.id}
              onChange={() => handleChecked(index)}
              className='task__check'
              type='checkbox'
            />
            <p>
              <label
                htmlFor={task.id}
                style={{ textDecoration: task.checked ? 'line-through' : '' }}
                className='task__text'
              >
                {task.text}
              </label>
            </p>
          </div>
          <span onClick={() => handleRemove(index)}>
            <TrashIcon />
          </span>
        </li>
      ))}
    </ul>
  )
}
