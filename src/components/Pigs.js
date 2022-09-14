import Pig from './Pig'

function Pigs({ hogs }){
    const pigCards = hogs.map((hog) => <Pig key={hog.name} hog={hog}/>)
    return (
        <div>
            {pigCards}
        </div>
    )

}

export default Pigs