import React, { Component } from 'react';
import gore from '../images/dr.gore.png';
import chrio3 from '../images/chrio3.jpg';
import chiro2 from '../images/chir02.png';
import Contact from '../about/contact';
import foundation from '../images/chirorock.jpg'



class about extends Component {
  render() {
    return (
      <div>
        <div id="imagecarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
          <ol className="carousel-indicators">
            <li data-target="#imagecarousel" data-slide-to="0" className="active"></li>
            <li data-target="#imagecarousel" data-slide-to="1"></li>
            <li data-target="#imagecarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 " stlye={{width: '100%', height:'100%'}} src={gore}   alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 " stlye={{width: '100%', height:'100%'}} src={foundation} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" stlye={{width: '100%', height:'100%'}} src={chiro2} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#imagecarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#imagecarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default about;   