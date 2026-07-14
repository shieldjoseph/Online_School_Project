import React from 'react'
import { useState, useEffect } from 'react';

const INTERVAL_MS = 10000;

const testimonials = [
	{
		id: 1,
		name: 'Mark John',
		description: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
	},
	{
		id: 2,
		name: 'Jaison Warner',
		description: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
	},
	{
		id: 3,
		name: 'Tony Antonio',
		description: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
	},
	{
		id: 4,
		name: 'Leena Doe',
		description: 'Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
	}
];

const TestimonialArea = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, INTERVAL_MS);
		return () => clearInterval(timer);
	}, []);

    return (
        <>
            <section className="testimonial-area">
				<div className="testimonial-solid">
					<div className="container">
						<div className="carousel slide">
							<div className="carousel-inner testimonial-viewport">
								<div className="testimonial-track" style={{ transform: `translateX(-${activeIndex * 100}%)`,}}>
									{testimonials.map((item) => (
										<div key={item.id} className="testimonial-slide">
											<p>{item.description}</p>
											<p><strong>- {item.name} -</strong></p>
										</div>
									))}
								</div>
							</div>
							<ol className="carousel-indicators">
								{testimonials.map((_, index) =>(
									<li key={index} className={index === activeIndex ? 'active' : ''} 
									onClick={() => setActiveIndex(index)}
									/>
								))}
							</ol>
						</div>	
					</div>
				</div>
			</section>	
		</>
	)	
}

export default TestimonialArea;