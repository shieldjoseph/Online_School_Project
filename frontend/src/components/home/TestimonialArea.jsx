import React from 'react'

const TestimonialArea = () => {

    return (
        <>
            <section className="testimonial-area">
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
			</section>
        </>
    )
}

export default TestimonialArea