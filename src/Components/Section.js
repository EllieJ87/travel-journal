import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Section(props) {
  return (
    <section className="main-section">
      <div className="row">
        <div className="col-lg-4 col-md-6 location-img">
          <img src={props.imageUrl} alt="img" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="placement-location">
            <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
            <p className="location-name">{props.location}</p>
            <a href={props.googleMapsUrl} target='_blank' rel="noreferrer" className="location-google">View on Google Maps</a>
          </div>
          <div className="placement-info">
            <h3 className="placement-name">{props.place}</h3>
            <p className="placement-dates">{props.dates.startDate} - {props.dates.endDate}</p>
            <p className="placement-description">{props.description}</p>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-lg-4 col-md-6 location-img">
          <img src={require("../Images/iceland.jpg")} alt="img" className="img-fluid" />
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="placement-location">
            <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
            <p className="location-name">Norway</p>
            <a href="https://github.com/EllieJ87" target='_blank' rel="noreferrer" className="location-google">View on Google Maps</a>
          </div>
          <div className="placement-info">
            <h3 className="placement-name">Oslo</h3>
            <p className="placement-dates">23/07/1988 - 02/08/1988</p>
            <p className="placement-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem temporibus eveniet natus quibusdam nulla recusandae, suscipit sed quasi, corrupti, est molestiae id. Autem repellendus quaerat aperiam numquam nam harum pariatur.</p>
          </div>
        </div>
      </div> */}
    </section>
  )
}