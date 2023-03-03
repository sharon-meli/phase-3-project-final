import { useState, useEffect } from "react";
import "./style.css"

function AppointmentForm(){

    

    const [doctors, setDoctors] = useState([])
    const [patients,setPatients] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/doctors")
        .then(response => response.json())
        .then(data => {
            setDoctors(data)
        })
        fetch("http://localhost:9292/patients")
        .then(response => response.json())
        .then(data => {
            setPatients(data)
        })


    }, [])

    return (
        <div>
            <form>
                <input type="date" name="date"/>
                <select name="doctor">
                    {
                        doctors.map(doctor => {
                            return <option value={doctor.id}>{doctor.name}</option>
                        })
                    }
                </select>
                <select name="patient">
                    {
                        patients.map(patient => {
                            return <option value={patient.id}>{patient.name}</option>
                        })
                    }
                </select>

                <input type="submit" value="Submit" />
            </form>
     </div>
    )
}



function Form({addPatient,patient, handlePatientData,formState}){

    function handleChange(event){
        handlePatientData(event.target.name, event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(formState==="post"){
            const dataToSubmit={...patient}
            delete dataToSubmit.id
            addPatient(dataToSubmit);
        }else{
            addPatient(patient)
        }
    }

    return (
    <div className="form">
        <form onSubmit={handleSubmit} className="patientForm">
        
        <label  className="form-label">Patient's id</label>
        <input onChange={handleChange}  value={patient.id} type="number" className="form-control" id="idInput" placeholder="Enter your id" disabled/>
        

        <label  className="form-label">Patient's Name</label>
        <input onChange={handleChange} value={patient.name} name="name" type="text" className="form-control" id="nameInput" placeholder="Enter your Full Name"/>

        <label  className="form-label">Gender</label>
        <input onChange={handleChange} value={patient.gender} name="gender"type="text" className="form-control" id="genderInput" placeholder ="Enter your gender"/>

        <label  className="form-label">Age</label>
        <input onChange={handleChange} value ={patient.age} name ="age"type="number" className="form-control" id="ageInput" placeholder="Enter your age"/>

        <label className="form-label">Residence</label>
        <input onChange={handleChange} value={patient.residence} name="residence"type="text" className="form-control" id="residenceInput" placeholder ="Enter your place of residence"/>

        <label  className="form-label">Weight</label>
        <input onChange={handleChange} value={patient.weight} name ="weight"type="number" className="form-control" id="weightInput"  placeholder="Enter your weight"/>
        <br/>
        <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
)
}
export { Form, AppointmentForm }