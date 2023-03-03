import icon from "../icon/search-12-64.png"
function Search({handleSearch,showForm,setShowForm}){
    return(
    <div className="search">
        <button onClick={()=>{
        setShowForm(!showForm)
        }}>{!showForm?"Patient Registration Form":"🔙"}</button>
        <div className="searchBar">
            <div className="button">
                <input type="text" onChange={handleSearch} placeholder="Search Patient's Name"/>
                <img src={icon} alt="search logo"/> 
            </div> 
        </div>
    </div>
    )
}
export default Search;