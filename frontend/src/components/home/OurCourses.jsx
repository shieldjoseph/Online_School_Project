import React from 'react'
import CourseContent from '../CourseContent.jsx'

const OurCourses = () => {

	const courseList = [
		{
			id: 1,
			name: 'React',
			description: 'React is a JavaScript library for building user interfaces.'
		},
		{
			id: 2,
			name: 'Node.js',
			description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.'
		},
		{
			id: 3,
			name: 'MongoDB',
			description: 'MongoDB is a NoSQL database that uses JSON-like documents with schemas.'
		},
		{
			id: 4,
			name: 'Express',
			description: 'Express is a web application framework for Node.js.'
		},
		{
			id: 5,
			name: 'PostgreSQL',
			description: 'PostgreSQL is a powerful, open source object-relational database system.'
		},
		{
			id: 6,
			name: 'MySQL',
			description: 'MySQL is a relational database management system.'
		}
	];

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