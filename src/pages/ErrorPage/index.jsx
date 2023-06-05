import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const ErrorPage = () => {
    return (
        <div className="error_container">
            <h2 className="error_title">404: Tady nic není</h2>
            <p className="error_text">Asi jste se spletli</p>
            <Link to="/">Přejít na úvodní stránku</Link>
        </div>
    )
};

export default ErrorPage;