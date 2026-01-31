import React, { useContext, useEffect, useState } from 'react'
import alertContext from '../context/alertContext'
import Alertitem from './Alertitem';

const AddAlert = () => {
    const context = useContext(alertContext);
    const { alert, addAlert, getAllAlerts } = context;
    const [alerts, setAlerts] = useState({ country: "", city: "", visaType: "", status: "" })

    const onSubmit = (e) => {
        e.preventDefault();
        addAlert(alerts);
        setAlerts({ country: "", city: "", visaType: "", status: "" })
        alert("Alert added successfully")
    }

    const onchange = (e) => {
        setAlerts({ ...alerts, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getAllAlerts();
    }, [])

    return (
        <div className='container'>
            <form className='container my-3' onSubmit={onSubmit}>
                <h3 className='my-3'>Add Alert</h3>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" name='country' value={alerts.country} onChange={onchange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name='city' value={alerts.city} onChange={onchange} id="city" />
                </div>
                <div className="mb-3">
                    <label htmlFor="visaType" className="form-label">Visa Type</label>
                    <select id="visaType" name='visaType' onChange={onchange} className="form-select">
                        <option value={""}>Select visa type</option>
                        <option value={"tourist"}>Tourist</option>
                        <option value={"business"}>Business</option>
                        <option value={"student"}>Student</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select id="status" className="form-select" name='status' onChange={onchange}>
                        <option value={""}>Select visa type</option>
                        <option value={"active"}>Active</option>
                        <option value={"booked"}>Booked</option>
                        <option value={"expired"}>Expired</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className=" row my-3">
                <h3>All Alerts</h3>
                {alert.length === 0 && <p>No alerts added yet</p>}
                {Array.isArray(alert) && alert.map((alerts) => {
                    return <Alertitem key={alerts._id} alerts={alerts} />
                })}
            </div>
        </div>
    )
}

export default AddAlert
