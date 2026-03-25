import React from 'react'
import './Modules.css'
import {
  FaCogs,
  FaTools,
  FaDraftingCompass,
  FaMicrochip,
  FaIndustry,
  FaRulerCombined,
  FaClipboardCheck,
  FaWrench,
  FaLaptopCode,
  FaProjectDiagram,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";

const modules = [
  { icon: <FaCogs />, name: "Introduction to CNC & VMC Machines" },
  { icon: <FaIndustry />, name: "Machine Components & Working" },
  { icon: <FaTools />, name: "Tool Types & Tool Selection" },
  { icon: <FaRulerCombined />, name: "Engineering Drawing Reading" },
  { icon: <FaDraftingCompass />, name: "Measurement & Inspection Tools" },
  { icon: <FaClipboardCheck />, name: "Safety Practices & Shop-floor Rules" },

  { icon: <FaLaptopCode />, name: "Basics of CNC Programming" },
  { icon: <FaMicrochip />, name: "G-Code & M-Code Programming" },
  { icon: <FaProjectDiagram />, name: "Program Structure & Logic" },
  { icon: <FaCogs />, name: "Machine Setup & Zero Setting" },
  { icon: <FaWrench />, name: "Tool Offset & Calibration" },
  { icon: <FaIndustry />, name: "Workpiece Clamping Techniques" },

  { icon: <FaBolt />, name: "Turning Operations (Lathe)" },
  { icon: <FaCogs />, name: "Milling Operations (VMC)" },
  { icon: <FaTools />, name: "Drilling, Boring & Threading" },
  { icon: <FaProjectDiagram />, name: "Cycle Programming" },
  { icon: <FaClipboardCheck />, name: "Quality Control Basics" },
  { icon: <FaRulerCombined />, name: "Tolerance & Surface Finish" },

  { icon: <FaLaptopCode />, name: "Simulation & Program Testing" },
  { icon: <FaIndustry />, name: "Production Process Workflow" },
  { icon: <FaShieldAlt />, name: "Machine Maintenance Basics" },
  { icon: <FaTools />, name: "Troubleshooting & Error Handling" },
  { icon: <FaProjectDiagram />, name: "Live Industrial Projects" },
  { icon: <FaClipboardCheck />, name: "Interview Preparation & Job Readiness" }
];

const CNCModules = () => {
  return (
    <div cnc-modules>

        
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            CNC/VMC Operations & Programming Modules
          </h2>

          <p className="modules-desc">
            Our CNC/VMC training program is designed to make you job-ready with
            hands-on experience in machine operations, programming, and real
            industrial practices. From basic concepts to advanced machining and
            live projects, every module focuses on practical learning and
            shop-floor readiness.
          </p>

          <div className="modules-grid">

            {modules.map((module, index) => (
              <div className="module-card" key={index}>
                <div className="module-icon">{module.icon}</div>
                <p className="module-name">{module.name}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default CNCModules