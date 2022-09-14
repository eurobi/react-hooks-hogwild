import React, {useState} from "react"

function Pig({hog}){
    const [clicked, changeClicked] = useState(false)
    function onPigClick(){
        changeClicked(!clicked)
    }

    const additionalPigInfo = (
        <>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased}</p>
        </>
    )
    
    return (
        <div onClick={onPigClick}>
            <h3>{hog.name}</h3>
            <img src={hog.image}></img>
            {clicked? additionalPigInfo : null}
        </div>
    )

}

export default Pig