import React from 'react'
import { render } from 'react-dom'
import 'core/style/app.scss'
import Routes from './routes'

render(<Routes />, global.document.querySelector('#root'))
