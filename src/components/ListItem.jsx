import React, { useState } from 'react'
import { FaTrash, FaCheckCircle } from 'react-icons/fa'

export default function ListItem({ content, handleDelete, index }) {
  const [isDone, setIsDone] = useState(false)

  function toggleDone() {
    setIsDone((prev) => !prev)
  }
  return (
    <div className="flex items-center justify-between text-xl my-3">
      <p className={isDone ? 'opacity-50 line-through' : ''}>{content}</p>
      <div className="flex items-center gap-6">
        <button
          className="text-green-600"
          onClick={toggleDone}
        >
          <FaCheckCircle />
        </button>
        <button
          data-id={index}
          className="text-red-600"
          onClick={handleDelete}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}
