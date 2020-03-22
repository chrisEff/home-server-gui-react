import '@babel/polyfill'
import { StyleSheetTestUtils } from 'aphrodite'

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })
StyleSheetTestUtils.suppressStyleInjection()
