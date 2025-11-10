import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/devis.css";

function DevisForm(){
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.removeItem("devisData");
  }, []);

  const initialData = location.state || {};

  const [client, setClient] = useState(initialData.client || {
    name: "",
    phone: "",
    address: "",
  });

  const [items, setItems] = useState(initialData.items || [
    {description: "",
     amount: "" }
  ]);



  const handleItemChange = (index, field, value) => {
  const newItems = [...items];
  newItems[index][field] = value;
  setItems(newItems);
  };
  
  const addItems = () => {
    setItems([...items, {description: "", amount: ""}]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("devisData", JSON.stringify({client, items}));
    navigate("/devis-preview");

  };

  return (
    <div className="form-container">
      <h2>Generate Your Devis</h2>
      <form onSubmit={handleSubmit}>
      <h3>Client Information</h3>
      <input
      type="text"
      placeholder="Client Name"
      value={client.name}
      onChange={(e) => setClient({...client, name: e.target.value })}
      required
      />
      <input
      type="text"
      placeholder="Phone number"
      value={client.phone}
      onChange={(e) => setClient({...client, phone: e.target.value })}
      required
      />
      <input
      type="text"
      placeholder="Address"
      value={client.address}
      onChange={(e) => setClient({...client, address: e.target.value })}
      required
      />

      <h3>Devis Items</h3>
      {items.map((item, index) => (
        <div key={index} className="item-row">
          <input
          type="text"
          placeholder="Description"
          value={item.description}
          onChange={(e) => handleItemChange(index, "description", e.target.value)}
          required
          />
          <input
          type="number"
          placeholder="amount"
          value={item.amount}
          onChange={(e) => handleItemChange(index, "amount", e.target.value)}
          required
          />
        </div>
      ))}

      <button type="button" onClick={addItems}>
        + Add Item
      </button>
      <button  type="submit" >Generate Devis</button>
      </form>
    </div>
  );
}
export default DevisForm;
