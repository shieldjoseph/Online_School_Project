import React from 'react';

const OurExpertise = () => {

    const expertise = [ 
        {
            name: 'Web Development',
            percentage: 90
        },
        {
            name: 'Designing',
            percentage: 80
        },
        {
            name: 'User Experience',
            percentage: 95
        },
        {
            name: 'Marketing',
            percentage: 70
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
		    	<h6>{expertise[0].name}</h6>
		    	<div className="progress pb-sm">
		    		<div
		    			className="progress-bar progress-bar-red"
		    			role="progressbar"
		    			aria-valuenow={expertise[0].percentage}
		    			aria-valuemin="0"
		    			aria-valuemax="100"
		    			style={{ width: `${expertise[0].percentage}%` }}
		    		>
		    			<span className="sr-only">{expertise[0].percentage}%</span>
		    		</div>
		    	</div>
		    	<h6>{expertise[1].name}</h6>
		    	<div className="progress pb-sm">
		    		<div
		    			className="progress-bar progress-bar-green"
		    			role="progressbar"
		    			aria-valuenow={expertise[1].percentage}
		    			aria-valuemin="0"
		    			aria-valuemax="100"
		    			style={{ width: `${expertise[1].percentage}%` }}
		    		>
		    			<span className="sr-only">{expertise[1].percentage}%</span>
		    		</div>
		    	</div>
		    	<h6>{expertise[2].name}</h6>
		    	<div className="progress pb-sm">
		    		<div
		    			className="progress-bar progress-bar-lblue"
		    			role="progressbar"
		    			aria-valuenow={expertise[2].percentage}
		    			aria-valuemin="0"
		    			aria-valuemax="100"
		    			style={{ width: `${expertise[2].percentage}%` }}
		    		>
		    			<span className="sr-only">{expertise[2].percentage}%</span>
		    		</div>
		    	</div>
		    	<h6>{expertise[3].name}</h6>
		    	<div className="progress pb-sm">
		    		<div
		    			className="progress-bar progress-bar-yellow"
		    			role="progressbar"
		    			aria-valuenow={expertise[3].percentage}
		    			aria-valuemin="0"
		    			aria-valuemax="100"
		    			style={{ width: `${expertise[3].percentage}%` }}
		    		>
		    			<span className="sr-only">{expertise[3].percentage}%</span>
		    		</div>
		    	</div>
		    </div>
        </>
	)
}

export default OurExpertise;