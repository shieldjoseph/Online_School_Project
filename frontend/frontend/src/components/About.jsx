import React from 'react'

import AwesomeTeam from './about/AwesomeTeam.jsx'
import OurAbilty from './about/OurAbilty.jsx'
import OurTeam from './about/OurTeam.jsx'

import sectionImg from '../assets/img/section-image-1.png'




export default function About() {
return (
		<>
			<section id="inner-headline">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pageTitle">About Us</h2>
						</div>
					</div>
				</div>
			</section>

			<section id="content">
				<div className="container">

					<div className="about">

						<AwesomeTeam />
						<br />

						<div className="row">
							<div className="col-md-6">
								<img src={sectionImg} alt="Section" />
								<div className="space" />
							</div>
							<div className="col-md-6">
								<p>
									Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, laudantium culpa tenetur at id, beatae pet.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, deserunt.
								</p>
								<ul className="list-unstyled">
									<li>
										<i className="fa fa-arrow-circle-right pr-10 colored" /> Lorem ipsum enim dolor sit amet
									</li>
									<li>
										<i className="fa fa-arrow-circle-right pr-10 colored" /> Explicabo deleniti neque aliquid
									</li>
									<li>
										<i className="fa fa-arrow-circle-right pr-10 colored" /> Consectetur adipisicing elit
									</li>
									<li>
										<i className="fa fa-arrow-circle-right pr-10 colored" /> Lorem ipsum dolor sit amet
									</li>
									<li>
										<i className="fa fa-arrow-circle-right pr-10 colored" /> Quo issimos molest quibusdam temporibus
									</li>
								</ul>
							</div>
						</div>
						<hr />
						<br />

						<OurAbilty />
						<hr />
						<br />

						<OurTeam />

					</div>
				</div>
			</section>
		</>
	)
}
