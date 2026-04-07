import React, { useState, useEffect } from "react";
import "./AdminForm.css";

const DesignChooseFooter = () => {

  const [formData, setFormData] = useState({
    choose: [
      { image: "", title: "", description: "" },
      { image: "", title: "", description: "" },
      { image: "", title: "", description: "" }
    ],
    footer: {
      phone: "",
      email: "",
      address: "",
      description: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/design");
        const data = await res.json();

        setFormData({
          choose: [
            {
              image: data?.choose?.[0]?.image || "",
              title: data?.choose?.[0]?.title || "",
              description: data?.choose?.[0]?.description || ""
            },
            {
              image: data?.choose?.[1]?.image || "",
              title: data?.choose?.[1]?.title || "",
              description: data?.choose?.[1]?.description || ""
            },
            {
              image: data?.choose?.[2]?.image || "",
              title: data?.choose?.[2]?.title || "",
              description: data?.choose?.[2]?.description || ""
            }
          ],
          footer: {
            phone: data?.footer?.phone || "",
            email: data?.footer?.email || "",
            address: data?.footer?.address || "",
            description: data?.footer?.description || ""
          }
        });

      } catch (err) {
        console.log("FETCH ERROR:", err);
      }
    };

    fetchData();
  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChooseChange = (index, field, value) => {
    const updatedChoose = [...formData.choose];
    updatedChoose[index][field] = value;

    setFormData(prev => ({
      ...prev,
      choose: updatedChoose
    }));
  };

  const handleFooterChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      footer: {
        ...prev.footer,
        [field]: value
      }
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("BODY:", formData);

      const res = await fetch("http://localhost:5000/api/design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("RESPONSE:", data);

      if (res.ok) {
        alert("Content Saved Successfully ✅");
      } else {
        alert("Save Failed ❌");
      }

    } catch (err) {
      console.log("SUBMIT ERROR:", err);
    }

    setLoading(false);
  };

  /* ================= UI ================= */

  return (
    <div className="admin-container">
      <form className="admin-card" onSubmit={handleSubmit}>

        <h1 className="main-title">Choose Section</h1>

        {formData.choose.map((item, index) => (
          <div key={index}>
            <h3 className="section-subtitle">Choose Card {index + 1}</h3>

            <div className="input-group">
              <label>Image URL</label>
              <input
                type="text"
                value={item.image || ""}
                onChange={(e) =>
                  handleChooseChange(index, "image", e.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label>Title</label>
              <input
                type="text"
                value={item.title || ""}
                onChange={(e) =>
                  handleChooseChange(index, "title", e.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label>Description</label>
              <textarea
                rows="3"
                value={item.description || ""}
                onChange={(e) =>
                  handleChooseChange(index, "description", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <br /><br />

        <h1 className="main-title">Footer Section</h1>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            value={formData.footer.phone || ""}
            onChange={(e) =>
              handleFooterChange("phone", e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            value={formData.footer.email || ""}
            onChange={(e) =>
              handleFooterChange("email", e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            value={formData.footer.address || ""}
            onChange={(e) =>
              handleFooterChange("address", e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            rows="3"
            value={formData.footer.description || ""}
            onChange={(e) =>
              handleFooterChange("description", e.target.value)
            }
          />
        </div>

        <button className="submit-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Content"}
        </button>

      </form>
    </div>
  );
};

export default DesignChooseFooter;