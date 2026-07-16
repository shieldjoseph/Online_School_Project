import React from 'react'
import { useState, useEffect } from 'react'
import CourseContent from '../CourseContent.jsx'
import { getCourses } from '../../api/courses.js'


const OurCourses = () => {

	// OurCourses.jsx — only swap data source
	const [courseList, setCourseList] = useState([]);
	useEffect(() => {
		getCourses().then(setCourseList).catch(console.error);
	}, [])

	return (
		<>
			<section className="courses">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="aligncenter">
								<h2 className="section-title">Our Courses</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.</p>
							</div>
						</div>
					</div>

					<div className="row">
						{courseList.slice(0, 3).map(course => (
							<CourseContent key={course.id} course={course} />
						))}
					</div>
					<div className="row">
						{courseList.slice(3, 6).map(course => (
							<CourseContent key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default OurCourses