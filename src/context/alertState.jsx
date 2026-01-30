import alertContext from "./alertContext";
import React, { useState } from "react";

const AlertState = (props) => {
    const [alert, setAlert] = useState([]);

    // get all alerts
    const getAllAlerts = async () => {
        // API call
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/getAllAlerts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setAlert(data)
    }

    // Add alert
    const addAlert = async ({country, city, visaType, status}) => {
        // API call
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/addAlert`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ country, city, visaType, status })
        })
        const data = await response.json();
        setAlert(alert.concat(data));
    }

    // update status
    const updateStatus = async (id, status) => {
        // API call
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        let newAlert = JSON.parse(JSON.stringify(alert));
        for (let i = 0; i < newAlert.length; i++) {
            let element = newAlert[i];
            if (element._id === id) {
                element.status = status;
                break;
            }
        }
        setAlert(newAlert);
    }

    // delete alert
    const deleteAlert = async (id) => {
        // API call
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/deleteAlert/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();

        // Remove from state (UI update)
        const newAlerts = alert.filter((a) => a._id !== id);

        setAlert(newAlerts);
    }

    // Filter alerts
    const filterAlerts = async (country = "", status = "") => {

        let url = `${import.meta.env.VITE_APP_API_URL}/`;
        let params = [];
        if (country) {
            params.push(`country=${country}`);
        }
        if (status) {
            params.push(`status=${status}`);
        }
        if (params.length > 0) {
            url = url + "?" + params.join("&");
        }

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        setAlert(data);
    };


    return (
        <alertContext.Provider value={{ alert, getAllAlerts, addAlert, updateStatus, deleteAlert, filterAlerts }}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;