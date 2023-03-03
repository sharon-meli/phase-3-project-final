import React,{useState, useEffect} from 'react';
import './App.css';
import { Form, AppointmentForm } from './components/Form.js';
import Header from './components/Header.js';
import Table from './components/Table.js';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Doctors from './components/Doctors';
import Appointments from './components/Appointments';
import ViewDoctor from './components/ViewDoctor';


function App() {
  const [table,setTable] = useState([])
  const [search,setSearch] = useState("")
  const [formState,setFormState] = useState("post")
  const [patient,setPatient] = useState({
    name:"",
    gender:"",
    age:"",
    residence:"",
    weight:"",
  })
  const [showForm,setShowForm]=useState(false)

  useEffect( ()=> {
    fetch("http://localhost:9292/patientDetails"+search)
    .then(resp => resp.json())
    .then(data => setTable(data))
  },[search])
  function handleSearch(e){
    setSearch(e.target.value)
  }

  function handlePatientData(key, value) {
    //alert("Editing")
    setPatient({...patient,[key]: value})
  }

  function addPatient(formData){
    if (formState==="post"){
        fetch("http://localhost:9292/patientDetails",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(data=>setTable([data,...table]));
    }else{
      const idx = formData.id
      delete formData.id
      fetch(`http://localhost:9292/patientDetails/${idx}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      }).then(response=>response.json())
      .then(data=>{
        setTable(table.map(patient =>{
          if(patient.id === data.id){
            return data
          }else{
            return patient
          }
        }))
      });
    }
  }

  function deletePatient(id){
    fetch(`http://localhost:9292/patientDetails/${id}`,{
      method:"DELETE"
    })
    setTable(table.filter(patient => patient.id !== id))
  }
  function handleEdit(id){
    setShowForm(true)
    setPatient(table.find(person => person.id === id))
  }

  const filteredPatients = table.filter(patient => {
    if(search==="") {
      return true
    }

    return patient.name.toLowerCase().includes(search.toLowerCase())
  })

const displayData = filteredPatients.map((array)=>{
return(
  <tr key={array.id}>
    <td>{array.id}</td>
    <td>{array.name}</td>
    <td>{array.gender}</td>
    <td>{array.age}</td>
    <td>{array.residence}</td>
    <td>{array.created_at}</td>
    <td>{array.weight}</td>
    <td className='delete-button'><button onClick={() => {
      deletePatient(array.id)
    }}>x</button></td>
    <td  onClick={()=>{
      handleEdit(array.id)
      setFormState("patch")
    }}><span className='editing'>Edit</span></td>
  </tr>
)
})
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      
      <Routes>
          <Route path="/" element={
          <>
          <Search handleSearch={handleSearch}showForm={showForm}setShowForm={setShowForm}/>
          <div className='main'>
          {showForm?<Form formState={formState} patient={patient} handlePatientData={handlePatientData}  addPatient={addPatient}/>:null}
          <Table displayData={displayData}/>
          </div>
          </>
          }/>
          <Route path="/doctors" element={<>
              <h2>Doctors</h2>
              <Doctors />
               </>
          }/>
          <Route path="/appointments" element={<Appointments/>}/>
          <Route path="/editappointment/:id" element={<AppointmentForm />}/>
          <Route path="/viewdoctor/:id" element={<ViewDoctor/>}/>
      </Routes>
      </div>
  );
}

export default App;
