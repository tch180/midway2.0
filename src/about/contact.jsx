import React, { Component } from 'react';

class contact extends Component {
    render() {
        return (

            <div>

                <button type="button" className="btn btn-secondary mt-5 " data-toggle="modal" data-target=".bs-modal-lg">Contact us</button>

                <div className="modal fade bs-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfi6fZ2AX0bqEJ0t9tEN6zuT6HroUKa230lXUeVVyJF8NGR5w/viewform?embedded=true" width="760" title="google forms" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default contact;