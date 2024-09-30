import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFeedbackId, setEditingFeedbackId] = useState(null); // For editing state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

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
    setEditingFeedbackId(feedback._id); // Set editing ID
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      try {
        await axios.delete(`http://localhost:5000/api/feedback/${id}`);
        alert("Feedback deleted successfully!");
        fetchFeedback(); // Refresh feedback list
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
      fetchFeedback(); // Refresh feedback list
      setFormData({ name: "", email: "", rating: "", feedback: "" }); // Reset form
      setEditingFeedbackId(null); // Reset editing state
    } catch (err) {
      console.error("Error updating feedback:", err);
      alert("Error updating feedback. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading feedback...</div>;
  }

  return (
    <div className="admin-feedback-container">
      <h2>Feedback List</h2>

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
          {feedbackList.map((feedback) => (
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
