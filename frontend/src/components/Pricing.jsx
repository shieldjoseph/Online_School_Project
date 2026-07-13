import React from 'react'
import PriceContent from './pricing/PriceContent.jsx'

const Pricing = () => {

	const priceList = [
		{
			id: 1,
			name: 'Basic',
			price: 20,
			period: '1 Month',
			features: [
				'Responsive Design',
				'Bootstrap Design',
				'Unlimited Support',
				'Free Trial version',
				'HTML5 CSS3 jQuery',
			]
		},
		{
			id: 2,
			name: 'Standard',
			price: 50,
			period: '3 Months',
			features: [
				'Responsive Design',
				'Bootstrap Design',
				'Unlimited Support',
				'Free Trial version',
				'HTML5 CSS3 jQuery',
			]
		},
		{
			id: 3,
			name: 'Advanced',
			price: 80,
			period: '6 Months',
			features: [
				'Responsive Design',
				'Bootstrap Design',
				'Unlimited Support',
				'Free Trial version',
				'HTML5 CSS3 jQuery',
			]
		},
		{
			id: 4,
			name: 'Mighty',
			price: 100,	
			period: 'Year',
			features: [
				'Responsive Design',
				'Bootstrap Design',
				'Unlimited Support',
				'Free Trial version',
				'HTML5 CSS3 jQuery',
			]
		}
	]

	return (
		<>
			<section id="inner-headline">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="pageTitle">Pricing</h2>
						</div>
					</div>
				</div>
			</section>

			<section id="content">
				<div className="container">	 
					<div className="row"> 

						{priceList.map(price => (
							<PriceContent key={price.id} price={price} />
						))}

					</div>
				</div>
			</section>
		</>
	)
}

export default Pricing
