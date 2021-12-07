import React, { useState, useEffect } from 'react';


  function Table(item){
  let [elems, setElems] = useState();
  useEffect(()=>{
    fetch('/date').then(res=>res.json()).then(res=>setElems(res))},[]);
    if(elems!==undefined){
    let listRows = [];
    for(let i=0;i<10;i+=1 ){
      let listItems=[];
     for(let j=0;j<10;j+=1 ){
      listItems.push(<td>{elems[i][j]}</td>)
     }
     listRows.push(<tr>{listItems}</tr>)
}   
    return (<table><tbody>{listRows}</tbody></table>)}
    else return <div>{'item'}</div>;
    }

   
  
export default Table;
