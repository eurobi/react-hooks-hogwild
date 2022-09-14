import React, {useState} from "react"


function Filters({ filter, setFilter, setOnlyGreased, onlyGreased }){
    function onGreased(){
        setOnlyGreased(!onlyGreased)
    }
    function onFilterChange(e){
        setFilter(e.target.value)
    }

    return(
        <form>
            <input onChange={onGreased} id='greased' type='checkbox'></input>
            <label for='greased'>Show Only Greased</label>
            <br></br>
            <label for='filters'>Filter By:</label>
            <select onChange={onFilterChange} value={filter} name='filters'>
                <option>None</option>
                <option>Weight</option>
                <option>Name</option>
            </select>
        </form>
    )
}

export default Filters