import React from 'react'
import "./Dashboard.css"
import { string_resources } from "../../resources/Strings";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
            <div className="dashboard-header-title">{string_resources.WEL_PAGE.HEADING}</div>
            <div className="dashboard-header-profile">{string_resources.WEL_PAGE.HEADING}</div>
            </div>
        </div>
    )
}

export default Dashboard
