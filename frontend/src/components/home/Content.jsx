import React from 'react'

const Content = () => {

    const content = [
        {
            title: 'Web Development',
            description: 'Web Development is a process that creates websites and web applications.'
        },
        {
            title: 'UI Design',
            description: 'UI Design is a process that creates user interfaces for websites and web applications.'
        },
        {
            title: 'Interaction',
            description: 'Interaction is a process that allows users to interact with a website or web application.'
        },
        {
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
								<div className="col-md-3 text-center">
									<span className="icons c1">
										<i className="fa fa-trophy" />
									</span>
									<div className="box-area">
										<h3>{content[0].title}</h3>
										<p>
											{content[0].description}
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c2">
										<i className="fa fa-picture-o" />
									</span>
									<div className="box-area">
										<h3>{content[1].title}</h3>
										<p>
											{content[1].description}
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c3">
										<i className="fa fa-desktop" />
									</span>
									<div className="box-area">
										<h3>{content[2].title}</h3>
										<p>
											{content[2].description}
										</p>
									</div>
								</div>

								<div className="col-md-3 text-center">
									<span className="icons c4">
										<i className="fa fa-globe" />
									</span>
									<div className="box-area">
										<h3>{content[3].title}</h3>
										<p>
											{content[3].description}
										</p>
									</div>
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