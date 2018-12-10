import React, { Component } from "react";
import Service from '../service/service';

import midwayheader from "../images/midwayheader.jpg";
import Contact from "../about/contact";

class homepage extends Component {
  render() {
    return (
      <div>

        
        <p className="intro">Welcome To Midway Injury Clinic</p>
        <p className="phonenumber">
          <span>
            <i className="fa fa-phone-square" aria-hidden="true" />
          </span>
          <a href="tel:6787053404">(678) 705-3404</a>
        </p>
        <div className="jumbotron jumbotron-fluid">
          <img className="card-img-top" src={midwayheader} alt="midway logo" />
          <div className="card-body lead">
            Accidents, of any kind, can be scary, painful and confusing. During
            the aftermath of an accident you are unsure of what to do and where
            to turn. What do I do first? Who do I call? It can be overwhelming
            to say the least but rest assured it doesn’t have to be
          </div>

          <div className="card-body">
            Allow Midway Injury Clinic to become your accident concierge.
            Located in Decatur, Georgia, in the Avondale Belvedere Midway
            Corridor, Midway Injury Clinic is a chiropractic facility
            specializing in personal injury care. Our friendly and dedicated
            staff have over 20+ years of experience combined. Upon arrival our
            onsite chiropractor will place you on a regime, designed based on
            your injuries, that will help relieve pain, regain mobility and
            place your mind at ease. We are conveniently open 5 days a week so
            that you are able to come at your leisure. At Midway Injury Clinic
            our goal is to make sure that you receive the best care possible!
          </div>
        </div>
           

       <Service/>
        <Contact />
      </div>
    );
  }
}

export default homepage;
