import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

export function TylerHomeworkComponent() {
    const [name,onChange] = useState('')
   return <div>
   <TopImage/> 
        <Label name = {'Его имя - '+name}/>
        <HomeWorkTextField callback = {
            (e)=>{
                onChange(e.target.value)
            }
        }/>
        <button onClick={
            ()=>{
                if(name.toLowerCase()==='роберт полсон'){
                    alert('Лишь утратив всё до конца, мы обретаем свободу.')
                }
                else{
                    alert('Ты не справился')
                }
            }
        }>Узнать правду!</button>
    </div>
}

function Label(props) {
    return <h1>{props.name}</h1>
}

function TopImage(){
    return <img src="https://avatars.dzeninfra.ru/get-zen_doc/3518430/pub_61eeea8eefaff71e04074432_61eeeb5e434f7e10a6c7cae7/scale_1200" width={200} height={200}/>
}

const HomeWorkTextField = (props)=>{
    return <input type='text' onChange={props.callback}/>
}