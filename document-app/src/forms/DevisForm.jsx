import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/devis.css";

function DevisForm(){
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   localStorage.removeItem("devisData");
  // }, []);

  const initialData = location.state || {};

  const [project, setProject] = useState(initialData.project || {
    name: "",
    estimateNo: "",
    reference: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
  });

  const [client, setClient] = useState(initialData.client || {
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  const [ourInfo, setOurInfo] = useState(initialData.ourInfo || {
    name: "",
    phone: "",
    email: "",
    company: "",
    team: "",
  });

  const [overview, setOverview] = useState(initialData.overview || {
    duration: "",
    totalTasks: "",
    totalReviews: "",
  }); 

  const [tasks, setTasks] = useState(initialData.tasks || [
    { name: "", duration: "", reviews: "", price: "", details: ""}
  ]);

  const [financial, setFinancial] = useState(initialData.financial || {
    advancePayment: "",
    taxValue: "",
  });


  const handleTaskChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };
  
  const addTask = () => { 
    setTasks([...tasks, { name: "", duration: "", reviews: "", price: "", details:"" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const devisData = {
      project, 
      client,
      ourInfo,
      overview,
      tasks,
      financial,
    };
    localStorage.setItem("devisData", JSON.stringify(devisData));
    navigate("/devis-preview");

  };

  return (
    <div className="form-container">
      <h2>Project Estimate Form</h2>
      <form onSubmit={handleSubmit}>

        <h3>Project Information</h3>
        <label>Project Name</label>
        <input 
        type="text"
        placeholder="Project Name"
        value={project.name}
        onChange={(e) => setProject({...project, name:e.target.value})}
        required
        />
        <label>Estimate Number</label>
        <input
          type="text"
          placeholder="Estimate No."
          value={project.estimateNo}
          onChange={(e) => setProject({ ...project, estimateNo: e.target.value })}
        />
        <label>Reference</label>
        <input
          type="text"
          placeholder="Reference"
          value={project.reference}
          onChange={(e) => setProject({ ...project, reference: e.target.value })}
        />
        <label>Date</label>
        <input
          type="date"
          value={project.date}
          onChange={(e) => setProject({ ...project, date: e.target.value })}
        />
        <label>Project Description</label>
        <textarea
          placeholder="Short Description"
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
        />

        <h3>Client Information</h3>
        <label>Client Name</label>
        <input
        type="text"
        placeholder="Client Name"
        value={client.name}
        onChange={(e) => setClient({...client, name: e.target.value })}
        required
        />
        <label>Phone Number</label>
        <input
        type="text"
        placeholder="Phone number"
        value={client.phone}
        onChange={(e) => setClient({...client, phone: e.target.value })}
        required
        />
        <label>Email</label>
        <input
        type="text"
        placeholder="Email"
        value={client.email}
        onChange={(e) => setClient({...client, email: e.target.value })}
        required
        />
        <label>Company</label>
        <input
          type="text"
          placeholder="Company"
          value={client.company}
          onChange={(e) => setClient({ ...client, company: e.target.value })}
        />
        <h3>Our Information</h3>
        <label>Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={ourInfo.name}
            onChange={(e) => setOurInfo({ ...ourInfo, name: e.target.value })}
          />
          <label>Your Phone</label>
          <input
            type="text"
            placeholder="Phone"
            value={ourInfo.phone}
            onChange={(e) => setOurInfo({ ...ourInfo, phone: e.target.value })}
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Email"
            value={ourInfo.email}
            onChange={(e) => setOurInfo({ ...ourInfo, email: e.target.value })}
          />
          <label>Your Company</label>
          <input
            type="text"
            placeholder="Company"
            value={ourInfo.company}
            onChange={(e) => setOurInfo({ ...ourInfo, company: e.target.value })}
          />
          <label>Team</label>
          <input
            type="text"
            placeholder="Team"
            value={ourInfo.team}
            onChange={(e) => setOurInfo({ ...ourInfo, team: e.target.value })}
          />

          <h3>Overview</h3>
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration (e.g. 3 weeks)"
            value={overview.duration}
            onChange={(e) => setOverview({ ...overview, duration: e.target.value })}
          />
          <label>Total Tasks</label>
          <input
            type="number"
            placeholder="Total Tasks"
            value={overview.totalTasks}
            onChange={(e) => setOverview({ ...overview, totalTasks: e.target.value })}
          />
          <label>Total Reviews</label>
          <input
            type="number"
            placeholder="Total Reviews"
            value={overview.totalReviews}
            onChange={(e) => setOverview({ ...overview, totalReviews: e.target.value })}
          />

      
      <h3>Task Breakdown</h3>
        {tasks.map((task, index) => (
          <div key={index} className="task-row">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="Task Name"
              value={task.name}
              onChange={(e) => handleTaskChange(index, "name", e.target.value)}
            />
            <label>Duration</label>
            <input
              type="text"
              placeholder="Duration"
              value={task.duration}
              onChange={(e) => handleTaskChange(index, "duration", e.target.value)}
            />
            <label>Reviews</label>
            <input
              type="text"
              placeholder="Reviews"
              value={task.reviews}
              onChange={(e) => handleTaskChange(index, "reviews", e.target.value)}
            />
            <div className="price-label"> 
            <label>Price</label>
            <input
              type="number"
              placeholder="Price"
              value={task.price}
              onChange={(e) => handleTaskChange(index, "price", e.target.value)}
            />
            </div>

            <label>Details</label>
            <input
              type="text"
              placeholder="Task description or details"
              value={task.details}
              onChange={(e) =>
                handleTaskChange(index, "details", e.target.value)
              }
            />
          </div>
        ))}

        <button type="button" onClick={addTask}>+ Add Task</button>

        

        <h3>Financial Data</h3>
        <label>Advance Payment (%)</label>
        <input
          type="number"
          placeholder="Advance Payment (%)"
          value={financial.advancePayment}
          onChange={(e) => setFinancial({ ...financial, advancePayment: e.target.value })}
        />
        <label>Tax Value (%)</label>
        <input
          type="number"
          placeholder="TAX Value (%)"
          value={financial.taxValue}
          onChange={(e) => setFinancial({ ...financial, taxValue: e.target.value })}
        />

        <button type="submit">Generate Estimate</button>
      </form>
    </div>
  );
};
export default DevisForm;
