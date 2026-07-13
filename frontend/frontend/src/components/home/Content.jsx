import React from 'react'

const Content = () => {

    const content = [
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident.'
        },
        {
            title: 'UI Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident.'
        },
        {
            title: 'Interaction',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident.'
        },
        {
            title: 'User Experience',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident.'
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