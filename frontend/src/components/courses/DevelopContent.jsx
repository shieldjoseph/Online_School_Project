import React from 'react'
import DevelopElement from './DevelopElement.jsx'

import subject1 from '../../assets/img/service1.jpg'
import subject2 from '../../assets/img/service2.jpg'
import subject3 from '../../assets/img/service3.jpg'

const DevelopContent = () => {

	const developList = [
		{
			id: 1,
			image: subject1,
			title: 'Web Development',
			description: 'Web Development is the process of creating websites and web applications.'
		},
		{
			id: 2,
			image: subject2,
			title: 'Mobile Development',
			description: 'Mobile Development is the process of creating mobile applications.'
		},
		{
			id: 3,
			image: subject3,
			title: 'Responsive Design',
			description: 'Responsive Design is the process of creating websites that are responsive to the device they are being viewed on.'
		}
	];
	
    return (
        <>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>
			<br />
			
            {developList.map(develop => (
					<DevelopElement key={develop.id} develop={develop} />
			))}
        </>
    )
}

export default DevelopContent