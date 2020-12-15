import React from 'react';
import './main.css';
import Card from './components/Card';
import Data from './data.json';


function App2(){


    //let items = [];
    //items = Data.map((item) => <Card titleText={item.title} descText={item.desc} /> );

    //for(let x=0;x<Data.length;x++){
    //    items.push(< Card titleText={Data[x].title} descText={Data[x].desc}/>)

    return  <div>
        <h1 className="heading">React App</h1>
        {Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc} /> )}

    </div>
 }
export default App2;