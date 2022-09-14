import React, {useState} from "react"
import Nav from "./Nav";
import Pigs from './Pigs'
import Filters from './Filters'

import hogs from "../porkers_data";

function App() {
	const [onlyGreased, setOnlyGreased] = useState(false)
	const [filter, setFilter] = useState('None')


	let filteredHogs = [...hogs]
	if(onlyGreased){
		filteredHogs = hogs.filter((hog) => hog.greased === true)
	}

	if(filter === 'None'){
		filteredHogs = filteredHogs
	}
	else if(filter ==='Weight'){
		filteredHogs = filteredHogs.sort((hog1, hog2) => hog1.weight - hog2.weight)
		console.log(filteredHogs)
	}
	else if(filter ==='Name'){
		filteredHogs = filteredHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
		console.log(filteredHogs)
	}

	return (
		<div className="App">
			<Nav />
			<Filters filter={filter} setFilter={setFilter} setOnlyGreased={setOnlyGreased} onlyGreased={onlyGreased} />
			<Pigs hogs={filteredHogs} />
		</div>
	);
}

export default App;
