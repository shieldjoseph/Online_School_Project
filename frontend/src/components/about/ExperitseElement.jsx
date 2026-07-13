import React from 'react'

const ExperitseElement = ({ expertise }) => {
    return (
        <div>
            <h6>{expertise.name}</h6>
		    <div className="progress pb-sm">
		    	<div
		    		className={`progress-bar progress-bar-${expertise.color}`}
		    		role="progressbar"
		    		aria-valuenow={expertise.percentage}
		    		aria-valuemin="0"
		    		aria-valuemax="100"
		    		style={{ width: `${expertise.percentage}%` }}
		    	>
		    		<span className="sr-only">{expertise.percentage}%</span>
		    	</div>
		    </div>
        </div>
    )
}

export default ExperitseElement