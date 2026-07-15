import React from 'react'
import ContentElement from './ContentElement.jsx'

const Content = () => {

    const contentList = [
        {
			id: 1,
			icon: 'trophy',
            title: 'Web Development',
            description: 'Web Development is a process that creates websites and web applications.'
        },
        {
			id: 2,
			icon: 'picture-o',
            title: 'UI Design',
            description: 'UI Design is a process that creates user interfaces for websites and web applications.'
        },
        {
			id: 3,
			icon: 'desktop',
            title: 'Interaction',
            description: 'Interaction is a process that allows users to interact with a website or web application.'
        },
        {
			id: 4,
			icon: 'globe',
            title: 'User Experience',
            description: 'User Experience is an experience that users have when using a website or web application.'
        }
    ]
	
    return (
        <>
            <section id="content">
				<div className="container">
					<div className="row">
						<div className="skill-home">
							<div className="skill-home-solid clearfix">	
								<div className="row">
									{contentList.map((content) => (
										<ContentElement key={content.id} content={content} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Content