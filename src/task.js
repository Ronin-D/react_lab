// import { useState } from 'react';

// const tableDataList = [
//     {'title':'Фусими Инари','type':'Храм','location':'Киото','buildDate':'711'},
//     {'title':'Замок Химэдзи','type':'Замок','location':'Химэдзи','buildDate':'1333'},
//     {'title':'Район Сибуя','type':'Район','location':'Токио','buildDate':'1947'},
//     {'title':'Токийская башня','type':'Телевизионная башня','location':'Токио','buildDate':'1958'},
//     {'title':'Tokyo Skytree','type':'Телевизионная башня','location':'Токио','buildDate':'2012'},
//     {'title':'Район Асакуса','type':'Район','location':'Токио','buildDate':'1600'},
//     {'title':'Арасиям','type':'Район','location':'Киото','buildDate':'794'},
//     {'title':'Кинкаку-дзи','type':'Храм','location':'Киото','buildDate':'1397'},
//     {'title':'Тодай-дзи','type':'Храм','location':'Нара','buildDate':'728'},
//     {'title':'Кофуку-дзи','type':'Храм','location':'Нара','buildDate':'710'},
//     {'title':'Касуга-тайся','type':'Синтоистское святилище','location':'Нара','buildDate':'768'},
//     {'title':'Якуси-дзи','type':'Храм','location':'Нара','buildDate':'680'},
//     {'title':'НиккоТосё-гу','type':'Синтоистское святилище','location':'Никко','buildDate':'1617'},
//     {'title':'Паркмира','type':'Парк','location':'Хиросима','buildDate':'1954'},
//     {'title':'Императорский дворец','type':'Дворец','location':'Токио','buildDate':'1869'},
//     {'title':'Хаконе','type':'Посёлок','location':'префектура Канагава','buildDate':'1956'},
//     {'title':'Киёмидзу-дэра','type':'Храм','location':'Киото','buildDate':'776'},
//     {'title':'Замок Мацумото','type':'Замок','location':'Нагано','buildDate':'1504'},
//     {'title':'Храм Аманава Симмэй','type':'Храм','location':'Камакура','buildDate':'710'},
//     {'title':'Сугимото-дэра','type':'Храм','location':'Камакура','buildDate':'734'},
//     {'title':'Хасэ Каннон','type':'Храм','location':'Камакура','buildDate':'736'},
//     {'title':'Энгаку-дзи','type':'Храм','location':'Камакура','buildDate':'1282'},
//     {'title':'Тэкэй-дзи','type':'Храм','location':'Камакура','buildDate':'1285'},
//     {'title':'Кэнтё-дзи','type':'Храм','location':'Камакура','buildDate':'1253'},
//     {'title':'Цуругаока Хатимангу','type':'Храм','location':'Камакура','buildDate':'1063'},
//     {'title':'Замок Сюри','type':'Замок','location':'Окинава','buildDate':'1322'},
//     {'title':'Парк «МирОкинавы»','type':'Парк','location':'Окинава','buildDate':'1996'},
//     {'title':'Кумано-кодо','type':'Тропа','location':'Хонсю','buildDate':'907'},
//     {'title':'Сад Кансэн-эн','type':'Сад','location':'Токио','buildDate':'1906'},
//     {'title':'Лендмарк-тауэр','type':'Небоскрёб','location':'Йокогама','buildDate':'1993'},
//     {'title':'CosmoWorld','type':'Паркразвлечений','location':'Йокогама','buildDate':'1989'},
//     {'title':'Kishamichi Promenade','type':'Пешеходная зона','location':'Йокогама','buildDate':'1911'},
//     {'title':'Minato Mirai Hall','type':'Концертный зал','location':'Йокогама','buildDate':'1980'},
//     {'title':'Nippon Maru','type':'Музей-корабль','location':'Йокогама','buildDate':'1930'},
//     {'title':'Музейискусств Иокогамы','type':'Музей','location':'Йокогама','buildDate':'1989'},
//     {'title':'Дотонбори','type':'Улица','location':'Осака','buildDate':'1612'},
//     {'title':'Пагода Чурейто','type':'Пагода','location':'Хонсю','buildDate':'1958'},
//     {'title':'Источники Кусацу','type':'Горячие источники','location':'Кусацу','buildDate':'1200'},
//     {'title':'Дзигокудани','type':'Парк','location':'Яманоути','buildDate':'1964'},
//     {'title':'Замок Нидзё','type':'Замок','location':'Накагё','buildDate':'1603'},
//     {'title':'Замок Кумамото','type':'Замок','location':'Кумамото','buildDate':'1601'},
//     {'title':'Замок Нагоя','type':'Замок','location':'Нагоя','buildDate':'1610'},
//     {'title':'Токийский Диснейленд','type':'Парк развлечений','location':'Токио','buildDate':'1983'},
//     {'title':'Храм Сайходзи','type':'Храм','location':'Сэндай','buildDate':'1706'},
//     {'title':'Котоку-ин','type':'Храм','location':'Камакура','buildDate':'1243'},
//     {'title':'Мирайкан','type':'Музей','location':'Одайба','buildDate':'2001'},
//     {'title':'Башня порта Кобе','type':'Башня','location':'Кобе','buildDate':'1963'},
//     {'title':'Замок Аидзувакамацу','type':'Замок','location':'Аидзувакамацу','buildDate':'1384'},
//     {'title':'Порт Кобе','type':'Порт','location':'Кобе','buildDate':'1889'}]

// export function MainComponent(){
//     const [tableAttr,onChange] = useState({'title':true,'type':true,'location':true,'buildDate':true})
//     const [tableData,onChangeData] = useState(tableDataList)
//     return (<div>
//     <CheckBoxes data = {['title','type','location','buildDate']} callback={(elem,val)=>{
//         tableAttr[elem] =  val
//         onChange(tableAttr)
//         onChangeData(
//             tableData.map((e)=>{
//                 let test = elem
//                 let t = {}
//                 Object.keys(e).forEach(key=>{
//                     if(tableAttr[key]){
//                     t[key] = e[key]
//                     }
//                 })
//                 return t
//             })
//         )
//     }}
//     />
//         <TableHead headers = {tableAttr} data={tableData}/>
//     </div>)
// }


//     const TableHead = (props)=>{
//         const headers = Object.keys(props.headers).map(key => {
//             if (props.headers[key]) {
//                  return <th>{key}</th>
//             }
           
//         })
//         return <table>
//         <tr>
//             {headers}
//         </tr>
//             <TableBody data = {props.data}/>
//         </table>
//     }

//     const TableBody = (props)=>{

//         let tableRows = props.data.map(element => {
//             return <tr>
//                 <td>
//                     {element.title}
//                 </td>
//                 <td>
//                     {element.type}
//                 </td>
//                 <td>
//                     {element.location}
//                 </td>
//                 <td>
//                     {element.buildDate}
//                 </td>
//             </tr>
//         });
//         return tableRows
//     }

//     const CheckBoxes=(props)=>{
//        let checkBoxes =  props.data.map(e=>{
//             return <label>
//                 {e}
//                 <CheckBox value={e} callback = {props.callback}/> 
//             </label>
//         })
//         return <div>
//             {checkBoxes}
//         </div>
//     }

//     const CheckBox = (props)=>{
//         let [checked,onChange] = useState(true)
//         return <input type='checkBox' value={props.value} checked={checked} onChange={
//             ()=>{
//                 onChange(!checked)
//                 let val = props.value
//                 props.callback(val,!checked)
//                 }
//         }/> 
//     }