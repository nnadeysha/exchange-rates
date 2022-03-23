import { API_CBR } from "./constants/const";
import {setExhangeRates} from "./components/rates.js"
fetch(API_CBR).then(response => response.json())
    .then(data => {
        setExhangeRates(data);
    console.log(data)})