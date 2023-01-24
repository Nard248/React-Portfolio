import ReactDOM  from "react-dom";
import App from './App'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))
ReactDOM.render(<About/>, document.querySelector("#about"))
ReactDOM.render(<Contact/>, document.querySelector("#contact"))