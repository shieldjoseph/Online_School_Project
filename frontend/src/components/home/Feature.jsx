import React from 'react'
import slide1 from '../../assets/img/slides/1.jpg'
import slide2 from '../../assets/img/slides/2.jpg'
import slide3 from '../../assets/img/slides/3.jpg'

const Feature = () => {
    const slides = [
        { src: slide1, title: 'Online Education', description: 'The best educational template' },
        { src: slide2, title: 'School Education', description: 'Get all courses with on-line content' },
        { src: slide3, title: 'College Education', description: 'Awesome Template — get it now' },
    ]

    return (
        <>
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
        </>
    )
}

export default Feature