import React from 'react';

const AwesomeTeam = ({ showMore, onToggle }) => {
	return (
		<>
        <div className="row">
			<div className="col-md-12">
                <div className="about-logo">
                    <h3>
                        We are awesome <span className="color">TEAM</span>
                    </h3>
                    <p>
                        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    </p>
                    <button type="button" className="btn btn-color" onClick={onToggle}>
                        {showMore ? 'Read Less...' : 'Read More...'}
                    </button>
                </div>
            </div>
        </div>
        </>
	)
}

export default AwesomeTeam;