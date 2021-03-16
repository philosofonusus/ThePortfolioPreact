import {render} from 'preact/compat'
import App from './App';
import 'normalize.css'
import "./style/main.min.css"
import './style/carousel.css'

if(typeof window !== "undefined"){
    render(<App />, document.body);
}
