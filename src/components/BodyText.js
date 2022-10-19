import React from 'react'

const Styles = {
    fontFamily:' monospace',
}
export default function BodyText(props) {
    const {text} = props
  return (
  <>
    <p style={Styles}>{text}</p>

  </>
  )
}
