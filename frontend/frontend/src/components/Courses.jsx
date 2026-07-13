import React from 'react'
import CourseOffer from './courses/CourseOffer.jsx'
import DevelopContent from './courses/DevelopContent.jsx'

export default function Courses() {
	return (
    <>
		<section id="inner-headline">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h2 className="pageTitle">Courses</h2>
					</div>
				</div>
			</div>
		</section>

		<section id="content">
			<div className="container">

				<CourseOffer />
				<hr />

				<DevelopContent />
        		
			</div>
		</section>
	</>
  )
}
