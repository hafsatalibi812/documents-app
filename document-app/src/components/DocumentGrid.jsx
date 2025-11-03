import React from "react"
import DocumentCard from "./DocumentCard"
import "../styles/document-grid.css"

function DocumentGrid(){
  const documents = [
    {
      id: "1",
      icon: "📄",
      title: "Devis",
      description: "Create detailed project estimates",
      route: "/devis-form"
      
    },
    {
      id: "2",
      icon: "📋",
      title: "Resume",
      description: "Create a professional resume to showcase your experience and skills",
      
    },
    {
      id: "3",
      icon: "📄",
      title: "comming soon",
      description: "comming soon",
      
    },
    {
      id: "4",
      icon: "📋",
      title: "comming soon",
      description: "comming soon",
      
    },
  ];
  return (
    <div className="document-grid">
      {documents.map((doc) => (
       < DocumentCard
        key={doc.id}
        icon={doc.icon} 
        title={doc.title} 
        description={doc.description}
        route={doc.route}
        />
      ))}
    </div>
  );
}
export default DocumentGrid