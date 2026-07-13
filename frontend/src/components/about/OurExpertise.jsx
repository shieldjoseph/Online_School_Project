import React from 'react'
import ExperitseElement from './ExperitseElement.jsx'

const OurExpertise = () => {

    const expertise = [ 
        {
            id: 1,
            name: 'Web Development',
            percentage: 90,
			color: 'red'
        },
        {
            id: 2,
            name: 'Designing',
            percentage: 80,
			color: 'green'
        },
        {
            id: 3,
            name: 'User Experience',
            percentage: 95,
			color: 'lblue'
        },
        {
            id: 4,
            name: 'Marketing',
            percentage: 70,
			color: 'yellow'
        }
    ]

	return (
		<>
            <div className="col-md-4">
		    	<div className="block-heading-two">
		    		<h3>
		    			<span>Our Expertise</span>
		    		</h3>
		    	</div>
				{expertise.map(expertise => (	
					<ExperitseElement key={expertise.id} expertise={expertise} />
				))}
		    </div>
        </>
	)
}

export default OurExpertise;