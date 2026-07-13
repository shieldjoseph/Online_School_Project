import React from 'react'

const ContactForm = () => {
    return (
    <>
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
    </>
    )
}

export default ContactForm