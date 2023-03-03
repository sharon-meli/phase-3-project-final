import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

function Appointments(){

    const [appointments, setAppointments] = useState([])

    useEffect(() =>{
        fetch("http://localhost:9292/appointments")
        .then(resp=>resp.json())
        .then(data=>setAppointments(data))
    },[])

    return(
        <div className="appointments">
        <table className="table">
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Doctor</th>
                <th scope="col">Patient</th>
            </tr>
        </thead>
        <tbody>
            {
                appointments.map((appointment, index) => {
                    return (
                        <tr key={index}>
                            <td>{appointment.date}</td>
                            <td className="tabledata">
                                <span className="r">{appointment.doctor.name}</span><br />
                                <span className="g">{appointment.doctor.contact}</span><br />
                                <span className="b">{appointment.doctor.department}</span><br />
                            </td>
                            <td className="tabledata">
                                <span className="r">{appointment.patient.name}</span><br />
                                <span className="g">{appointment.patient.gender}</span><br />
                                <span className="b">{appointment.patient.residence}</span><br />
                            </td>
                            <td>
                                <button onClick={() => {
                                    fetch(`http://localhost:9292/appointments/${appointment.id}`,{
                                    method:"DELETE"
                                  })
                                    setAppointments([...appointments].filter(app => app.id!==appointment.id))
                                }}>Cancel</button>
            
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div> 
            
        
    )
}

export default Appointments;