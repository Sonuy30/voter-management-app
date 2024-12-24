"use client"
import { useState, useEffect } from 'react';

const sampleVoters = [
  { id: 1, name: "John Doe", age: 30, status: "Active" },
  { id: 2, name: "Jane Smith", age: 25, status: "Inactive" },
  { id: 3, name: "Michael Johnson", age: 40, status: "Active" },
];

const Dashboard = () => {
  const [voters, setVoters] = useState([]);
  const [newVoter, setNewVoter] = useState({ name: "", age: "", status: "Active" });

  useEffect(() => {
    // For demo, set the sample voters. Replace with API calls in a real scenario.
    setVoters(sampleVoters);
  }, []);

  const handleAddVoter = () => {
    setVoters([...voters, { ...newVoter, id: voters.length + 1 }]);
    setNewVoter({ name: "", age: "", status: "Active" });
  };

  const handleRemoveVoter = (id) => {
    setVoters(voters.filter(voter => voter.id !== id));
  };

  const handleEditVoter = (id, updatedVoter) => {
    const updatedVoters = voters.map(voter =>
      voter.id === id ? { ...voter, ...updatedVoter } : voter
    );
    setVoters(updatedVoters);
  };

  return (
    <div>
      <h1>Voter Management Dashboard</h1>

      {/* Add Voter Form */}
      <div>
        <h2>Add New Voter</h2>
        <input
          type="text"
          placeholder="Name"
          value={newVoter.name}
          onChange={(e) => setNewVoter({ ...newVoter, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newVoter.age}
          onChange={(e) => setNewVoter({ ...newVoter, age: e.target.value })}
        />
        <select
          value={newVoter.status}
          onChange={(e) => setNewVoter({ ...newVoter, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleAddVoter}>Add Voter</button>
      </div>

      {/* Voter List */}
      <div>
        <h2>Voter List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {voters.map((voter) => (
              <tr key={voter.id}>
                <td>{voter.name}</td>
                <td>{voter.age}</td>
                <td>{voter.status}</td>
                <td>
                  <button onClick={() => handleEditVoter(voter.id, { status: voter.status === "Active" ? "Inactive" : "Active" })}>
                    Toggle Status
                  </button>
                  <button onClick={() => handleRemoveVoter(voter.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
