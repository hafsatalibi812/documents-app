import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/devis.css";

function DevisPreview() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const data = state || JSON.parse(localStorage.getItem("devisData") || "{}");
  const { project, client, ourInfo, overview, tasks, financial } = data;

  if (!project || !client) {
    return (
      <div>
        <p>No data found. Please fill out the form first.</p>
        <button onClick={() => navigate("/devis-form")}>Back to Form</button>
      </div>
    );
  }

  const tasksTotal = tasks.reduce((sum, task) => sum + parseFloat(task.price || 0), 0);
  const tax = (tasksTotal * (financial.taxValue || 0)) / 100;
  const total = tasksTotal + tax;
  const advance = (tasksTotal * (financial.advancePayment || 0)) / 100;

  return (
    <div className="devis">
      <div className="devis-header">
        <h1>{project.name || "Project Estimate"}</h1>
        <div className="devis-header-info">
          <p>Estimate No: {project.estimateNo || "Auto"}</p>
          <p>Reference: {project.reference || "N/A"}</p>
          <p>Date: {project.date}</p>
        </div>
      </div>

      <div className="project-description">
        <h3>Project Description</h3>
        <p>{project.description}</p>
      </div>

      <div className="infos">
        <div>
          <h3>Client Information</h3>
          <p>{client.name}</p>
          <p>{client.phone}</p>
          <p>{client.email}</p>
          <p>{client.company}</p>
        </div>

        <div>
          <h3>Our Information</h3>
          <p>{ourInfo.name}</p>
          <p>{ourInfo.phone}</p>
          <p>{ourInfo.email}</p>
          <p>{ourInfo.company}</p>
          <p>{ourInfo.team}</p>
        </div>
      </div>

      <div className="overview">
        <h3>Project Overview</h3>
        <p>Duration: {overview.duration}</p>
        <p>Total Tasks: {overview.totalTasks}</p>
        <p>Total Reviews: {overview.totalReviews}</p>
      </div>

      <h3>Task Breakdown</h3>
      <table className="devis-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Reviews</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={i}>
              <td>{t.name}</td>
              <td>{t.duration}</td>
              <td>{t.reviews}</td>
              <td>${t.price}</td>
              <td>{t.details}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h3>Financial Summary</h3>
      <p>Tasks Total: ${tasksTotal.toFixed(2)}</p>
      <p>Advance Payment ({financial.advancePayment || 0}%): ${advance.toFixed(2)}</p>
      <p>Tax ({financial.taxValue || 0}%): ${tax.toFixed(2)}</p>
      <h4>Total: ${total.toFixed(2)}</h4>

      <button
        className="back-btn"
        onClick={() => navigate("/devis-form", { state: data })}
      >
        Back to Edit
      </button>
    </div>
  );
}

export default DevisPreview;
