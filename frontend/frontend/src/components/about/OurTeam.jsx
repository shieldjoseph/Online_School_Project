import React from 'react';

import team1 from '../../assets/img/team1.jpg';
import team2 from '../../assets/img/team2.jpg';
import team3 from '../../assets/img/team3.jpg';
import team4 from '../../assets/img/team4.jpg';

const OurTeam = () => {

	const team = [
		{
			name: 'Johne Doe',
			role: 'Creative',
			image: team1
		},
        {
            name: 'Jennifer',
            role: 'Programmer',
            image: team2
        },
        {
            name: 'Christean',
            role: 'CEO',
            image: team3
		},
		{
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
                    <div className="col-md-3 col-sm-6">
                        <div className="team-member">
                            <img className="img-responsive" src={team[0].image} alt="Team member 1" />
                            <h4>{team[0].name}</h4>
                            <span className="deg">{team[0].role}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="team-member">
                            <img className="img-responsive" src={team[1].image} alt="Team member 2" />
                            <h4>{team[1].name}</h4>
                            <span className="deg">{team[1].role}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="team-member">
                            <img className="img-responsive" src={team[2].image} alt="Team member 3" />
                            <h4>{team[2].name}</h4>
                            <span className="deg">{team[2].role}</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="team-member">
                            <img className="img-responsive" src={team[3].image} alt="Team member 4" />
                            <h4>{team[3].name}</h4>
                            <span className="deg">{team[3].role}</span>
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}

export default OurTeam;