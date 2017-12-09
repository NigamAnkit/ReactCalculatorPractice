import React from 'react'
import {render} from 'react-dom'
import App from './App'

console.log('this is calculator')

let app = document.getElementById("app")
render(<App/>, app);