import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/devis.css";


function DevisPreview (){
    const { state } = useLocation();
    const navigate = useNavigate();

    const data = state || JSON.parse(localStorage.getItem("devisData") || "{}");
    const { client, items } = data;

    if (!client || !items) {
        return (
            <div>
            <p>No data found. Please fill out the form first.</p>
            <button onClick={() => navigate("/devis-form")}>Back to Form</button>
            </div>
        );
    }


    const total = items.reduce( 
        (sum, item) => sum + parseFloat(item.amount || 0), 0
    );
    const date = new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

  

    return (
        <div className=" devis">
            <div className="devis-header">
                <h1>Invoice</h1>
                <div className="devis-header-info">
                    <p>{date} </p>
                    <p>Invoice No.001</p>
                </div>
            </div>

            <div className="billed-to">
                <h3>Billed to:</h3>
                <p>{client.name} </p>
                <p>{client.phone} </p>
                <p>{client.address} </p>  
            </div>

            <table className="devis-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.description} </td>
                            <td>${item.amount} </td>
                        </tr>
                    ) )}
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>${total}</strong></td>
                    </tr>
                </tbody>
            </table>

            
            <div className="devis-footer">
                <div>
                <h4>Payment Information</h4>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                </div>

                <div>
                <h4>xxxx</h4>
                <p>xxxx</p>
                <p>xxxx</p>
                <p>xxxx</p>
                </div>
            </div>

            <button className="back-btn"
            onClick={() => navigate("/devis-form", { state: { client, items } })}
            >
            Back to Edit
            </button>
        </div>
    );
}
export default DevisPreview;
