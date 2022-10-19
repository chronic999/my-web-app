import React from 'react'

export default function UnorderedList(props) {
    const {items} = props
  return (
    <>{
    items.map(item => (
        <li key={item.toString()} className='ulItems'>{item}</li>)
    )
  }</>
  )
}
