function Table({displayData}){
    return(
        
<div className="displayTable">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">patient's id</th>
          <th scope="col">patient's Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Age</th>
          <th scope="col">Residence</th>
          <th scope="col">Date</th>
          <th scope="col">Weight</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {displayData}
      </tbody>
    </table>
    </div>
    )
}
export default Table;