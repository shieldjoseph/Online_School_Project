import React from 'react'

const DevelopElement = ({ develop }) => {
    return (
        <div className="col-md-4 md-margin-bottom-40">
            <img className="img-responsive" src={develop.image} alt="" />     
            <h3>{develop.title}</h3>
            <p>{develop.description}</p>
        </div>
    )
}

export default DevelopElement