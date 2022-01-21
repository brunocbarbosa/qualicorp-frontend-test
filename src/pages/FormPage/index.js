import { useEffect, useState } from 'react'
import api from '../../api'
import ProfessionTable from '../../components/ProfessionTable'

import './style.css'

function FormPage(){
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [profession, setProfession] = useState('')
  const [entity, setEntity] = useState('')
  const [professionTable, setProfessionTable] = useState([])

  
  function showTables(){
    console.log(city)
    console.log(state)
    console.log(profession)
    console.log(entity)
    if(city && state){
      setProfessionTable(arr => [...arr, `${city}`])
      // api.get(`profissao/${state}/${city}?api-key=ddd70c32-fc98-4618-b494-a9698f824353`).then(res => setProfessionTable(res.data))
    }

    console.log(professionTable)
  }

  return (
    <>
      <h1>QUALICORP FRONTEND TEST</h1>
    <div className="header">
    
    <div className="inputContainer">
      <div className="inputElement">
        <input type="text" placeholder='Cidade' onChange={(event) => setCity(event.target.value)}/>
      </div>
      <div className="inputElement">
        <input type="text" placeholder='Estado' onChange={(event) => setState(event.target.value)}/>
      </div>
      <div className="inputElement">
        <input type="text" placeholder='Profissão' onChange={(event) => setProfession(event.target.value)}/>
      </div>
      <div className="inputElement">
        <input type="text" placeholder='Entidade' onChange={(event) => setEntity(event.target.value)}/>
      </div>

      <button onClick={showTables}>Enviar</button>
    </div>
    
   
   
   </div>
   
   { 
      professionTable.length > 0 ?
      <ProfessionTable professions={professionTable} />
      :null
   }
 </>
  );
}

export default FormPage;