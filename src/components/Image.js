import React from 'react'
import logo from '../logo.svg'

export default function Image(props) {
    const {src, alt, width, height} = props

  return (
    <div>
        <img src={src} alt={alt} height={height} width={width}/>
    </div>
  )
}
