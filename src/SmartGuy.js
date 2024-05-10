import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

export function SmartGuyComponent() {
    let navigate = useNavigate();
    const [currentSmartValue,onSmartChange] = useState(1)
   return <div>
        <Label name = {'Поздравляем! Вы - умник!'}/>
        <TopImage/> 
        <p>Вы умник {currentSmartValue} раз(а)(ов)</p>
        <SmartGuyButton callback={
            ()=>{
                onSmartChange(currentSmartValue+1)
            }
        }/>
        <button onClick={
            ()=>{
                navigate('/homework')
            }
        }>Узнать домашку от тайлера</button>
    </div>
}

function Label(props) {
    return <h1>{props.name}</h1>
}

function TopImage(){
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS4sPFgNibxHDof1PoM1IGYfzMCInsPNZFvMayjUetxw&s" width={200} height={200}/>
}

const SmartGuyButton = (props)=>{
    return <button onClick={props.callback}>Я умник!</button>
}