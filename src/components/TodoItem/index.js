// Write your code here
import './index.css'
import {Component} from 'react'

const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  return (
    <li className="listItem">
      <para className="title">{title}</para>
      <button className="deleteButton">Delete</button>
    </li>
  )
}

export default TodoItem
