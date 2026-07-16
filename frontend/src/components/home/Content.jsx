import React from 'react'
import { useState, useEffect } from 'react'
import ContentElement from './ContentElement.jsx'
import { getContent } from "../../api/content.js";

const Content = () => {

    const [contentList, setContentList] = useState([]);
	useEffect(() => {
		getContent().then(setContentList).catch(console.error);
	}, [])
	
    return (
        <>
            <section id="content">
				<div className="container">
					<div className="row">
						<div className="skill-home">
							<div className="skill-home-solid clearfix">	
								<div className="row">
									{contentList.map((content) => (
										<ContentElement key={content.id} content={content} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Content