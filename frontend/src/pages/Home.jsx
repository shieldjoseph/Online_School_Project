import { useEffect } from 'react'

import slide1 from '../assets/img/slides/1.jpg'
import slide2 from '../assets/img/slides/2.jpg'
import slide3 from '../assets/img/slides/3.jpg'

const slides = [
	{ src: slide1, title: 'Online Education', description: 'The best educational template' },
	{ src: slide2, title: 'School Education', description: 'Get all courses with on-line content' },
	{ src: slide3, title: 'College Education', description: 'Awesome Template — get it now' },
]

function Home() {
	useEffect(() => {
		const $ = window.jQuery || window.$
		if ($ && typeof $.fn !== 'undefined' && typeof $.fn.flexslider === 'function') {
			$('.flexslider').flexslider()
		}
	}, [])

	return (
		<div id="wrapper">
			
			<section id="featured">
				<div id="main-slider" className="flexslider">
					<ul className="slides">
						{slides.map((slide, index) => (
							<li key={index}>
								<img src={slide.src} alt={slide.title} />
								<div className="flex-caption">
									<div className="item_introtext">
										<strong>{slide.title}</strong>
										<p>{slide.description}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="callaction">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="aligncenter">
								<h1 className="aligncenter">Our Featured Courses</h1>
								<span className="clear spacer_responsive_hide_mobile" style={{ height: 13, display: 'block' }} />
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam,
									incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla
									nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias,
									laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="content">
				<div className="container">
					<div className="row">
						<div className="skill-home">
							<div className="skill-home-solid clearfix">
								<div className="col-md-3 text-center">
									<span className="icons c1">
										<i className="fa fa-trophy" />
									</span>
									<div className="box-area">
										<h3>Web Development</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam,
											incidunt eius magni provident.
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c2">
										<i className="fa fa-picture-o" />
									</span>
									<div className="box-area">
										<h3>UI Design</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam,
											incidunt eius magni provident.
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c3">
										<i className="fa fa-desktop" />
									</span>
									<div className="box-area">
										<h3>Interaction</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam,
											incidunt eius magni provident.
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c4">
										<i className="fa fa-globe" />
									</span>
									<div className="box-area">
										<h3>User Experience</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam,
											incidunt eius magni provident.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="testimonial-area">
				<div className="testimonial-solid">
					<div className="container">
						<div className="testi-icon-area">
							<div className="quote">
								<i className="fa fa-microphone" />
							</div>
						</div>
						<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carousel-example-generic" data-slide-to="0" className=""><a href="#"></a></li>
								<li data-target="#carousel-example-generic" data-slide-to="1" className=""><a href="#"></a></li>
								<li data-target="#carousel-example-generic" data-slide-to="2" className="active"><a href="#"></a></li>
								<li data-target="#carousel-example-generic" data-slide-to="3" className=""><a href="#"></a></li>
							</ol>
							<div className="carousel-inner">
								<div className="item">
									<p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
									<p><strong>- Mark John -</strong></p>
								</div>
								<div className="item">
									<p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
									<p><strong>- Jaison Warner -</strong></p>
								</div>
								<div className="item active">
									<p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
									<p><strong>- Tony Antonio -</strong></p>
								</div>
								<div className="item">
									<p>Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
									<p><strong>- Leena Doe -</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="courses">
				<div className="container">

					<div className="row">
						<div className="col-lg-12">
							<div className="aligncenter">
								<h2 className="aligncenter">Courses We Offer</h2>
								<span className="clear spacer_responsive_hide_mobile" style={{ height: 13, display: 'block' }} />
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus, vero mollitia velit ad consectetur. Alias, laborum excepturi nihil autem nemo numquam, ipsa architecto non, magni consequuntur quam.
								</p>
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
				</div>
			</section>

		</div>
	)
}

export default Home
