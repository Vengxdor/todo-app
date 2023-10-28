import React, { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export default function Header () {
  const date = new Date()
  const options = { month: 'long' }
  const currentMonth = new Intl.DateTimeFormat('en-US', options).format(date)

  const { tasks } = useContext(TasksContext)

  const moment = {
    date: date.getDate(),
    day: date.getDay()
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <header className='header'>
      <h4 className='header__date'>
        {`${days[moment.day]}, ${currentMonth} ${moment.date}`}
      </h4>
      <span className='header__tasks'>{tasks.length} Actives Tasks</span>
    </header>
  )
}
