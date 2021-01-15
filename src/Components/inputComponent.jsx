import React, {useState} from 'react'

export default function inputComponent(props) {
  const [text,setText] = useState('')
  return <div>
    <span>Texto: {text}</span>
    <input id="textChanger" value={name} onChange={(e) => setText(e.target.value)}></input>
  </div>
}