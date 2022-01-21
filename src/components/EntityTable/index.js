
import './style.css'

const EntityTable = ({entities}) => {
  return(
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
         
        </tr>
      </thead>
    <tbody>
      {entities.map(data =>(
        <tr key={data}>
          <td>{data}</td>
         
        </tr>
      ))}
      </tbody>
    </table>
  </div>
  )

}

export default EntityTable