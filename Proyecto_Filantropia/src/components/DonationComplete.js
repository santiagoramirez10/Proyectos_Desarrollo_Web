import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import checkMark from "../images/check-mark.png"

const DonationComplete = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
        window.scrollTo({
            top: 0,
        });
    }, []);

    if (loading) {
        return (
            <div id="pageloader">
                <div class="loader-item">
                    <div class="loader">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="donation-complete-page">
            <h1 className="donation-complete-h1">¡Tu donación fue recibida con éxito!</h1>
            <img src={checkMark} alt="Your Image Alt Text Here" />
            <h2 className="donation-complete-h2">Gracias por tu contribución<br /> El certificado ha sido enviado a tu correo electrónico</h2>
            <div className="donation-complete-page-buttons">
                <Link to="/donate">
                    <button className="btn btn-default button-emerge">
                        <i className="fa-solid fa-heart"></i> Realizar otra Donación
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default DonationComplete;