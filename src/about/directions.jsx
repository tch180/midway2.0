import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';




const GoogleMapsComp = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'red',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);


class directions extends Component {
    static defaultProps = {
        center: {
            lat: 33.7557826,
            lng: -84.2701927,
        },
        zoom: 18,

    };









    render() {
        return (

            <React.Fragment>

            <div style={{ height: '400px', width: '100%', }} >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBm5xygZOGTkkqNi8uwXg-4wGqiiekK3m0' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                <GoogleMapsComp
                        lat={33.7557826}
                        lng={-84.2701927}
                        text={'Midway Injury Clinc'}
                    />
                </GoogleMapReact>
            </div>

                <div className="container">
                    <h2>Hours & Address</h2>
                    <p><i className="fa fa-address-card" aria-hidden="true"> Address:  1089 Columbia Dr Decatur, GA 30030</i>
                    </p>
                    <h3><i className="fa fa-phone-square" aria-hidden="true"> Phone Number: (678) 705-3404</i>
                    </h3>
                    <h4><i className="fa fa-envelope" aria-hidden="true"> Email: midwayinjuryclinic1089@gmail.com</i>
                    </h4>
                    <table className="table table-dark table-hover" style={{ align: 'right' }}>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Morning </th>
                                <th>Afternoon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>10am - 1pm</td>
                                <td>3pm - 7pm</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>Closed</td>
                                <td>3pm - 7 pm </td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>10am - 1pm </td>
                                <td>3pm - 7pm</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>Closed</td>
                                <td>3pm-7pm</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>Closed</td>
                                <td>3pm - 7pm </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                </React.Fragment>

            
        );
    }
}

export default directions;