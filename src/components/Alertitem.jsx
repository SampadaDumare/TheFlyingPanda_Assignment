import React, { useContext } from 'react'
import alertContext from '../context/alertContext'

const Alertitem = ({ alerts }) => {

    const context = useContext(alertContext);
    const { deleteAlert, updateStatus } = context;

    return (
        <div className='col-md-3'>
            <div className="card my-3">

                <div className="card-body">

                    <h5 className="card-title">
                        {alerts.country} - {alerts.city}
                    </h5>

                    <p className="card-text">
                        Visa Type: {alerts.visaType}
                    </p>

                    <p className="card-text">
                        Status: <b>{alerts.status}</b>
                    </p>

                    <div className="d-flex justify-content-between">

                        {/* Update Status */}
                        <select
                            className="form-select me-2"
                            value={alerts.status}
                            onChange={(e) =>
                                updateStatus(alerts._id, e.target.value)
                            }
                        >
                            <option value="active">Active</option>
                            <option value="booked">Booked</option>
                            <option value="expired">Expired</option>
                        </select>

                        {/* Delete */}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => {
                                if (window.confirm("Delete this alert?")) {
                                    deleteAlert(alerts._id);
                                }
                            }}
                        >
                            Delete
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Alertitem;
