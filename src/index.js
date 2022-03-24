import { API_CBR } from "./constants/const";
import {setExhangeRates} from "./components/rates.js"
import './style/style.css'

import {currentDate} from './components/currentDate';
console.log(currentDate())
;
fetch(API_CBR).then(response => response.json())
    .then(data => {
        setExhangeRates(data);
    console.log(data)})