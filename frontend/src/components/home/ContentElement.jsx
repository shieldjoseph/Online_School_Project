import React from 'react';

const ContentElement = ({ content }) => {
	return (
		<>
			<div className="col-md-3 text-center">
				<span className={`icons c${content.id}`}>
					<i className={`fa fa-${content.icon}`} />
				</span>
				<div className="box-area">
					<h3>{content.title}</h3>
					<p>{content.description}</p>
				</div>
			</div>
		</>
	);
};

export default ContentElement;