import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

function ViewDoctor(){

    const [doctor,setDoctor] = useState(null)
    const {id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:9292/doctor/${id}`)
        .then(response=>response.json())
        .then(data=>setDoctor(data))
    },[])

    return(
        <div>
        {doctor!==null?
            <>
             <h1>{doctor.name}</h1>
             <h2>{doctor.contact}</h2>
             <h2>{doctor.department}</h2>
             <table className="table">
             <thead>
                 <tr>
                 <th scope="col">Date</th>
                 <th scope="col">Patient</th>
                 </tr>
             </thead>
             <tbody>
                 {doctor.patients.map((patient,index)=>{
                     return(
                         <tr key={index}>
                             <td>{patient.created_at}</td>
                             <td>{patient.name}</td>
                         </tr>
                     )
                 })}
             </tbody>
             </table> 
            </>   :
             null
        }
        </div>
    )
} 
export default ViewDoctor;