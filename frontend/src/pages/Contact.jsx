import React from 'react'

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
					<div className="col-md-6">
						<br />
						<div className="alert alert-success hidden" id="contactSuccess">
							<strong>Success!</strong> Your message has been sent to us.
						</div>
						<div className="alert alert-error hidden" id="contactError">
							<strong>Error!</strong> There was an error sending your message.
						</div>

						<div className="contact-form">
							<form id="contact-form" role="form" noValidate>
								<div className="form-group has-feedback">
									<label htmlFor="name">Name*</label>
									<input type="text" className="form-control" id="name" name="name" placeholder="" />
									<i className="fa fa-user form-control-feedback"></i>
								</div>
								<div className="form-group has-feedback">
									<label htmlFor="email">Email*</label>
									<input type="email" className="form-control" id="email" name="email" placeholder="" />
									<i className="fa fa-envelope form-control-feedback"></i>
								</div>
								<div className="form-group has-feedback">
									<label htmlFor="subject">Subject*</label>
									<input type="text" className="form-control" id="subject" name="subject" placeholder="" />
									<i className="fa fa-navicon form-control-feedback"></i>
								</div>
								<div className="form-group has-feedback">
									<label htmlFor="message">Message*</label>
									<textarea className="form-control" rows="6" id="message" name="message" placeholder=""></textarea>
									<i className="fa fa-pencil form-control-feedback"></i>
								</div>
								<input type="submit" value="Submit" className="btn btn-default" />
							</form>
						</div>

					</div>

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
