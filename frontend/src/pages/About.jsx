import React from 'react'
import sectionImg from '../assets/img/section-image-1.png'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'



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
						<div className="row">

							<div className="col-md-12">
								<div className="about-logo">
									<h3>
										We are awesome <span className="color">TEAM</span>
									</h3>
									<p>
										Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
									</p>
									<p>
										Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
									</p>
								</div>
								<a href="#" className="btn btn-color">
									Read more
								</a>
							</div>
						</div>
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

						<br />
						<hr />
						<br />

						<div className="row">
							<div className="col-md-4">
								<div className="block-heading-two">
									<h3>
										<span>Why Choose Us?</span>
									</h3>
								</div>
								<p>
									Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
									<br />
									<br />
									Sed ut perspiciaatis iste natus error sit voluptatem probably haven&apos;t heard of them accusamus.
								</p>
							</div>
							<div className="col-md-4">
								<div className="block-heading-two">
									<h3>
										<span>Our Solution</span>
									</h3>
								</div>
								<div className="panel-group" id="accordion-alt3">
									<div className="panel">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseOne-alt3">
													<i className="fa fa-angle-right" /> Accordion Heading Text Item # 1
												</a>
											</h4>
										</div>
										<div id="collapseOne-alt3" className="panel-collapse collapse">
											<div className="panel-body">
												Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseTwo-alt3">
													<i className="fa fa-angle-right" /> Accordion Heading Text Item # 2
												</a>
											</h4>
										</div>
										<div id="collapseTwo-alt3" className="panel-collapse collapse">
											<div className="panel-body">
												Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseThree-alt3">
													<i className="fa fa-angle-right" /> Accordion Heading Text Item # 3
												</a>
											</h4>
										</div>
										<div id="collapseThree-alt3" className="panel-collapse collapse">
											<div className="panel-body">
												Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
											</div>
										</div>
									</div>
									<div className="panel">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion-alt3" href="#collapseFour-alt3">
													<i className="fa fa-angle-right" /> Accordion Heading Text Item # 4
												</a>
											</h4>
										</div>
										<div id="collapseFour-alt3" className="panel-collapse collapse">
											<div className="panel-body">
												Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="block-heading-two">
									<h3>
										<span>Our Expertise</span>
									</h3>
								</div>
								<h6>Web Development</h6>
								<div className="progress pb-sm">
									<div
										className="progress-bar progress-bar-red"
										role="progressbar"
										aria-valuenow="40"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: '40%' }}
									>
										<span className="sr-only">40% Complete (success)</span>
									</div>
								</div>
								<h6>Designing</h6>
								<div className="progress pb-sm">
									<div
										className="progress-bar progress-bar-green"
										role="progressbar"
										aria-valuenow="60"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: '60%' }}
									>
										<span className="sr-only">60% Complete (success)</span>
									</div>
								</div>
								<h6>User Experience</h6>
								<div className="progress pb-sm">
									<div
										className="progress-bar progress-bar-lblue"
										role="progressbar"
										aria-valuenow="80"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: '80%' }}
									>
										<span className="sr-only">80% Complete (success)</span>
									</div>
								</div>
								<h6>Development</h6>
								<div className="progress pb-sm">
									<div
										className="progress-bar progress-bar-yellow"
										role="progressbar"
										aria-valuenow="30"
										aria-valuemin="0"
										aria-valuemax="100"
										style={{ width: '30%' }}
									>
										<span className="sr-only">30% Complete (success)</span>
									</div>
								</div>
							</div>
							
						</div>
						<hr />
						<br />
						<div className="block-heading-six">
							<h3 className="bg-color">Our Team</h3>
						</div>
						<br />
						<div className="team-six">
							<div className="row">
								<div className="col-md-3 col-sm-6">
									<div className="team-member">
								<img className="img-responsive" src={team1} alt="Team member 1" />
										<h4>Johne Doe</h4>
										<span className="deg">Creative</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="team-member">
								<img className="img-responsive" src={team2} alt="Team member 2" />
										<h4>Jennifer</h4>
										<span className="deg">Programmer</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="team-member">
								<img className="img-responsive" src={team3} alt="Team member 3" />
										<h4>Christean</h4>
										<span className="deg">CEO</span>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="team-member">
								<img className="img-responsive" src={team4} alt="Team member 4" />
										<h4>Kerinele rase</h4>
										<span className="deg">Manager</span>
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
