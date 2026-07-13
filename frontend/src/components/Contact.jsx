import React from 'react'
import ContactForm from './contact/ContactForm.jsx'

export default function Contact() {
  	return (
		<>
			<section id="inner-headline">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pageTitle">Contact Us</h2>
						</div>
					</div>
				</div>
			</section>

			<section id="content">
				<div className="container">
					<div className="row">
						
						<ContactForm />

						<div className="col-md-6">						
							<div className="span4">
								<div className="title-box clearfix ">
									<h3 className="title-box_primary">Contact info</h3>
								</div> 
								
								<h5>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium.</h5>
								
								<p>Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, cadipisicing sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, laudantium culpa tenetur at id, beatae pet.<br /></p>
								<address>
									<strong>
										The Company Name.<br />
										12345 St John Point,<br />
										Brisbean, ABC 12 St 11.
									</strong>
									<br />
									Telephone: +1 234 567 890<br />
									FAX: +1 234 567 890<br />
									E-mail: <a href="mailto:info@sitename.org">mail@sitename.org</a><br />
								</address>

							</div> 
						</div>
					</div>

				</div>
			</section>
		</>			
  	)
}
