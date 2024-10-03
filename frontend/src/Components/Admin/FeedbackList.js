import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../App.css";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFeedbackId, setEditingFeedbackId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedback");
      setFeedbackList(response.data);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (feedback) => {
    setFormData(feedback);
    setEditingFeedbackId(feedback._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:5000/api/feedback/${id}`);
        alert("Feedback deleted successfully!");
        fetchFeedback();
      } catch (err) {
        console.error("Error deleting feedback:", err);
        alert("Error deleting feedback. Please try again.");
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/feedback/${editingFeedbackId}`,
        formData
      );
      alert("Feedback updated successfully!");
      fetchFeedback();
      setFormData({ name: "", email: "", rating: "", feedback: "" });
      setEditingFeedbackId(null);
    } catch (err) {
      console.error("Error updating feedback:", err);
      alert("Error updating feedback. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCSV = () => {
    return feedbackList.map((feedback) => ({
      Name: feedback.name,
      Email: feedback.email,
      Rating: feedback.rating,
      Feedback: feedback.feedback,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Email", "Rating", "Feedback"];
    const tableRows = [];

    feedbackList.forEach((feedback) => {
      const feedbackData = [
        feedback.name,
        feedback.email,
        feedback.rating,
        feedback.feedback,
      ];
      tableRows.push(feedbackData);
    });

    const companyName = "Your Company Name";
    const currentDate = new Date().toLocaleDateString();

    // Add company name and date at the top of the PDF
    doc.text(`${companyName}`, 14, 15);
    doc.text(`Date: ${currentDate}`, 14, 22);

    doc.autoTable(tableColumn, tableRows, { startY: 30 });
     // Adjusted to fit below company name and date
    doc.save("feedback_report.pdf");
  };

  const filteredFeedbacks = feedbackList.filter((feedback) =>
    feedback.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    feedback.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    feedback.feedback.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading feedback...</div>;
  }

  return (
    <div className="admin-feedback-container">
      <h2>Feedback List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search feedback..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      {/* Download Report Buttons */}
      <button onClick={generatePDF} style={{ marginBottom: "10px" }}>
        Download PDF Report
      </button>
      <CSVLink data={generateCSV()} filename="feedback-report.csv">
        <button style={{ marginBottom: "10px" }}>Download CSV Report</button>
      </CSVLink>

      {/* Edit Feedback Form */}
      {editingFeedbackId && (
        <form onSubmit={handleUpdate}>
          <h3>Edit Feedback</h3>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select a rating</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Write your feedback"
            required
          />
          <button type="submit">Update Feedback</button>
          <button type="button" onClick={() => setEditingFeedbackId(null)}>
            Cancel
          </button>
        </form>
      )}

      {/* Feedback List Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Feedback</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbacks.map((feedback) => (
            <tr key={feedback._id}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.feedback}</td>
              <td>
                <button
                  onClick={() => handleDelete(feedback._id)}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
