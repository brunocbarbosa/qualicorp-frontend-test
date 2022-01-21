import { useState } from 'react'
import api from '../../api'

function HealthPlan(props){
  const [birthDate, setBirthDate] = useState('')
  const [healthPlan, setHealthPlan] = useState([])

  function showTable(){
    if(props.entity, props.state, props.city, birthDate){
      const birthDateFormated = birthDate.split('/').reverse().join('-')

      const apiData = api.post(`/plano?api-key=261fd4d0-fd9f-468a-afa9-f5a89ed3701c`,{
        configBanco:{
          entidade: props.entity,
          uf: props.state,
          cidade: props.city,
          dataNascimento: birthDateFormated
        }
      })
      .then((res) => {
        return res.data
      })

      setHealthPlan(apiData)
    }
  }

  return (
    <>
      <h1>QUALICORP FRONTEND TEST</h1>
      <div className="header">
        <div className="inputContainer">
          <div className="inputElement">
            <input type="date" placeholder='birthDate' onChange={(event) => setBirthDate(event.target.value)}/>
          </div>

          <button onClick={showTable}>Enviar</button>
        </div>
      </div>
      { 
        professionTable.length > 0 ?
          <ProfessionTable professions={professionTable} />
        :null
      }
    </>
  )
}