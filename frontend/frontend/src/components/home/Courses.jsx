import React from 'react'
import CourseContent from '../CourseContent.jsx'

const Courses = () => {
    return (
        <>
            <section className="courses">
				<div className="container">
					
					<div className="row">
						<div className="col-md-12">
							<div className="aligncenter">
								<h2 className="section-title">Our Courses</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
								</p>
							</div>
						</div>
					</div>

					<CourseContent />

				</div>
			</section>
        </>
    )
}

export default Courses;