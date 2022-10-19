import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


export default function Counter() {
    const [count, setCount] = useState(0)
    const add = () => (setCount(prev=>prev+1))
    const sub = () => (setCount(prev=>prev-1))
  return (
    <>
    <Button variant='outline-primary' onClick={add}>Like</Button>
    <Button variant='outline-danger' onClick={sub}>Unlike</Button>
    <p>You Clicked The Button {count} Times!</p>

    
    </>
  )
}
