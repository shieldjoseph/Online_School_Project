import React from 'react'
import CourseContent from '../CourseContent.jsx'

const CourseOffer = () => {
    return (
        <>
            <section className="course">
				<div className="row">
					<div className="col-lg-12">
						<div className="">
							<h3>Courses We Offer</h3>
							<span className="clear spacer_responsive_hide_mobile " style={{ height: '13px', display: 'block' }} />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
						</div>
					</div>
				</div>
				
				<CourseContent />

			</section>
        </>
    )
}

export default CourseOffer