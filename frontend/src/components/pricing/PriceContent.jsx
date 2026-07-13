import React from 'react'

const PriceContent = ({ price }) => {
    return (
        <div className="col-lg-3">
            <div className="pricing-box-item">

                <div className="pricing-heading">
                    <h3><strong>{price.name}</strong></h3>
                </div>
                <div className="pricing-terms">
                    <h6>&#36;{price.price} / {price.period}</h6>
                </div>
                <div className="pricing-container">
                    <ul>
                        {price.features.map(feature => (
                            <li key={feature}><i className="icon-ok"></i> {feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="pricing-action">
                    <a href="#" className="btn btn-medium btn-theme"><i className="icon-bolt"></i> Get Now</a>
                </div>

            </div>
        </div>
    )
}

export default PriceContent