import React, {Component} from 'react';
import foundation from '../images/chirorock.jpg'
import shamika from '../images/shamika.jpg';
import crawford from '../images/Crawfie.jpg'
// import chrio3 from '../images/chrio3.jpg';
// import chiro2 from '../images/chir02.png';
// import fallon from '../images/drfallon.jpg';
// import crawford from '../images/drcrawford.jpg';



class about extends Component {
  render() {
    return (
      <div>

        <div className="card bg-light">
          <div className="card-header">
            About Us  
          </div>
          <div className="card-body">
            <h5 className="card-title">Everything you want to know about us</h5>
            <p className="card-text">Locally owned and operated right in decatur GA, We want to get you better to get you back to your life quicker. 
            Our Chriropratiors live and work in the atlanta, some teach at life college to help inspire the next generation of Chiropractors.
            </p>
            <div className=" bg-light">
            <img className="card-img-top" src={foundation} alt=""/>
            </div>
          </div>
        </div>






          <div className='row my-5' style={{display:'flex', justifyContent: 'space-evenly'}}>

          <div className="card  my-2" style={{ width: '18rem' }}>
          <img className="card-img-top thumbnail" src={crawford} alt="hello doc" />
          <div className="card-body">
            <h5 className="card-title">Dr. Candice Crawford</h5>
              <p className="card-text"> is a Mississippi native and was licensed in 2012. In 2006, 
              she graduated from Jackson State University in Jackson, MS with a Bachelor’s degree in Biology and Healthcare Administration. 
              In 2012,
              she graduated from Life University in Marietta with her Doctorate of Chiropractic and also matriculated towards her Master’s degree in Sports Health Science. 
  Dr. Crawford is well qualified to treat most musculoskeletal disorders sustained from either sports injuries or auto accidents. She is highly trained on the clinical approach of musculoskeletal disorders, proper case management, coordinating care with other health care providers, documentation and effective report writing.
  Dr. Crawford is a member of Alpha Delta Upsilon Professional Chiropractic Sorority and she loves to assist with community and social events within the Metro Atlanta area. Dr. Crawford is here to serve you and your family. Call to schedule your appointment today!
  
</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        {/* <div className="card  my-2" style={{ width: '18rem' }}>
          <img className="card-img-top" src={fallon} alt="Hello doc2" />
          <div className="card-body">
            <h5 className="card-title">Dr. Fallon Johns</h5>
            <p className="card-text"> Gradute of Life University</p> */}
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          {/* </div>
        </div> */}

        <div className="card my-2" style={{ width: '18rem' }}>
          <img className="card-img-top" src={shamika} alt="hello doc 3" />
          <div className="card-body">
            <h5 className="card-title">Shemeka Watson - Office Manager</h5>
            <p className="card-text">Our Amazing office manager. </p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default about;