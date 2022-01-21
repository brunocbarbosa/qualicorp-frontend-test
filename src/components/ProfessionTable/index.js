
import './style.css'

const ProfessionTable = ({professions}) => {
  return(
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
         
        </tr>
      </thead>
    <tbody>
      {professions.map(data =>(
        <tr key={data}>
          <td>{data}</td>
         
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  )

}

export default ProfessionTable