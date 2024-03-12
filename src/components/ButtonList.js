import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll">
      <Button  className="bg-gray-300 mx-5 py-1 px-2 rounded-md mb-8 w-20" name="All"/>
      <Button name="Music"/>
      <Button name="News"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="Gaming"/>
      <Button name="Holi"/>
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="News"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="Gaming"/>
      <Button name="Holi"/>
    </div>
  )
}

export default ButtonList

