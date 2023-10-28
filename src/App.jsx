import React from 'react'
import Header from './components/Header'
import TaskCreator from './components/TaskCreator'
import Tasks from './components/Tasks'

function App () {
  return (
    <main className='app'>
      <Header />
      <TaskCreator />
      <Tasks/>
    </main>
  )
}

export default App
