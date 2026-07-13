import React from 'react'

const TeamMember = ({ member }) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="team-member">
                <img className="img-responsive" src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <span className="deg">{member.role}</span>
            </div>
        </div>
    )
}

export default TeamMember