import React, { useState, useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import ListItem from './ListItem'

export default function AddForm() {
  const [inputValue, setInputValue] = useState('')
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setItemList(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(itemList))
  }, [itemList])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    itemList.push(inputValue)
    localStorage.setItem('items', JSON.stringify(itemList))
    setInputValue('')
  }

  function handleDelete(e) {
    const index = e.currentTarget.dataset.id
    setItemList((prevList) => prevList.filter((item, i) => i != index))
  }

  return (
    <div className="px-4">
      <form
        className="flex justify-center flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-slate-800 px-4 py-2 rounded-xl w-full md:max-w-[300px]"
          type="text"
          name="item"
          placeholder="Enter item for shopping list..."
          aria-label="Enter item for shopping list"
          onChange={handleChange}
          value={inputValue}
        />
        <button className="font-semibold self-end flex items-center justify-center gap-2 px-6 py-2 bg-purple-800 rounded-lg text-slate-100">
          Add <FaPlusCircle />
        </button>
      </form>
      <div className="mt-6">
        {itemList.map((item, index) => {
          return (
            <ListItem
              key={index}
              index={index}
              content={item}
              handleDelete={handleDelete}
            />
          )
        })}
      </div>
    </div>
  )
}
