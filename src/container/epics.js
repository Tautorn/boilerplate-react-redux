import { combineEpics } from 'redux-observable'

const epics = {}

const epicsFunctions = Object.keys(epics).map(key => epics[key])

export default combineEpics(...epicsFunctions)
