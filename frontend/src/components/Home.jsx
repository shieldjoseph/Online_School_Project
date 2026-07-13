import { useEffect } from 'react'
import Feature from './home/Feature.jsx'
import CallAction from './home/CallAction.jsx'
import Content from './home/Content.jsx'
import TestimonialArea from './home/TestimonialArea.jsx'
import OurCourses from './home/OurCourses.jsx'

function Home() {
	useEffect(() => {
		const $ = window.jQuery || window.$
		if ($ && typeof $.fn !== 'undefined' && typeof $.fn.flexslider === 'function') {
			$('.flexslider').flexslider()
		}
	}, [])

	return (
		<div id="wrapper">

			<Feature />

			<CallAction />

			<Content />

			<TestimonialArea />

			<OurCourses />
			
		</div>
	)
}

export default Home
