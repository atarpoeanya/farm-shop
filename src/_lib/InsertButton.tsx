'use client'



export default function InsertButton(tableName: string, inputData: any, driver: Function){

  function handler(){
    
  }

  return(

    <button onClick={() => driver(inputData)} className="category-button">+</button>
  )
}