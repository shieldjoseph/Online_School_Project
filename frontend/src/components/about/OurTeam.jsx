import React from 'react'
import TeamMember from './TeamMember.jsx'

import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';

const OurTeam = () => {

	const teamList = [
		{
            id: 1,
			name: 'Johne Doe',
			role: 'Creative',
			image: team1
		},
        {
            id: 2,
            name: 'Jennifer',
            role: 'Programmer',
            image: team2
        },
        {
            id: 3,
            name: 'Christean',
            role: 'CEO',
            image: team3
		},
		{
			id: 4,
			name: 'Kerinele rase',
			role: 'Manager',
			image: team4
		}
	];

	return (
		<>
            <div className="block-heading-six">
                <h3 className="bg-color">Our Team</h3>
            </div>
            <br />
            
            <div className="team-six">
                <div className="row">
                    {teamList.map(member => (
                        <TeamMember key={member.id} member={member} />
                    ))}
                </div>
            </div>
		</>
    )
}

export default OurTeam