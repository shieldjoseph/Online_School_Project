import React from 'react'

const CourseContent = ({ course }) => {

    return (

        <div className="col-md-4">
            <div className="textbox">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
            </div>
        </div>

    )

}

export default CourseContent;

