import React from 'react'

import subject1 from '../../assets/img/service1.jpg'
import subject2 from '../../assets/img/service2.jpg'
import subject3 from '../../assets/img/service3.jpg'

const DevelopContent = () => {
    return (
        <>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>
			<br />
			
            <div className="row service-v1 margin-bottom-40">
        	    <div className="col-md-4 md-margin-bottom-40">
        	       <img className="img-responsive" src={subject1} alt="" />     
        	        <h3>Web Development</h3>
        	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        	    </div>
        	    <div className="col-md-4">
        	        <img className="img-responsive" src={subject2} alt="" />            
        	        <h3>Mobile Development</h3>
        	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        	    </div>
				
        	    <div className="col-md-4 md-margin-bottom-40">
        	      <img className="img-responsive" src={subject3} alt="" />  
        	        <h3>Responsive Design</h3>
        	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus</p>        
        	    </div>
        	</div>
        </>
    )
}

export default DevelopContent