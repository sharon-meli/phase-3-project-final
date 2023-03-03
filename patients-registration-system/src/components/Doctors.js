
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Doctors(){

    const navigate = useNavigate()

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/doctors")
        .then(response => response.json())
        .then(data => setDoctors(data))
    },[])

    return(
        <div className="doctors">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    doctors.map((doctor, index) => {
                        return (
                            <tr key={index} onClick={()=> {
                                navigate(`/viewdoctor/${doctor.id}`)
                            }}>
                                <td>{doctor.name}</td>
                                <td>{doctor.contact}</td>
                                <td>{doctor.department}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
        </div>
    )
}

export default Doctors;