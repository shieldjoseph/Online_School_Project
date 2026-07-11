import React from 'react'

import subject1 from '../assets/img/service1.jpg'
import subject2 from '../assets/img/service2.jpg'
import subject3 from '../assets/img/service3.jpg'

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

					<div className="row">

        			    <div className="col-md-4">
							<div className="textbox">
        			    	    <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>
						
        			    <div className="col-md-4">
							<div className="textbox">
        			    	    <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>

						<div className="col-md-4">
							<div className="textbox">
        			    	    <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>

        			</div>
			
					<div className="row">

        			    <div className="col-md-4">
							<div className="textbox">
        			    	    <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>

        			    <div className="col-md-4">
							<div className="textbox">
        			    	      <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>

						<div className="col-md-4">
							<div className="textbox">
        			    	      <h3>Heading Course</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vest sit amet, consec ibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.</p>
        			    	</div>
						</div>
					</div>
				</section>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>
				<br />
        		<div className="row service-v1 margin-bottom-40">
        		    <div className="col-md-4 md-margin-bottom-40">
        		       <img className="img-responsive" src={subject1} alt="" />     
        		        <h3>Web Development</h3>
        		        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        		    </div>

        		    <div className="col-md-4">
        		        <img className="img-responsive" src={subject2} alt="" />            
        		        <h3>Mobile Development</h3>
        		        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        		    </div>
					
        		    <div className="col-md-4 md-margin-bottom-40">
        		      <img className="img-responsive" src={subject3} alt="" />  
        		        <h3>Responsive Design</h3>
        		        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        		    </div>
        		</div>
			</div>
		</section>
	</>
  )
}
