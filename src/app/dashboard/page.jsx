'use client';
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
    if (!newVoter.name || !newVoter.age) return;  // Basic validation
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
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Voter Management Dashboard</h1>

      {/* Add Voter Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Add New Voter</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter Voter's Name"
              value={newVoter.name}
              onChange={(e) => setNewVoter({ ...newVoter, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              placeholder="Enter Voter's Age"
              value={newVoter.age}
              onChange={(e) => setNewVoter({ ...newVoter, age: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={newVoter.status}
              onChange={(e) => setNewVoter({ ...newVoter, status: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button
            onClick={handleAddVoter}
            className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Add Voter
          </button>
        </div>
      </div>

      {/* Voter List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Voter List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter) => (
                <tr key={voter.id} className="border-b">
                  <td className="px-4 py-2">{voter.name}</td>
                  <td className="px-4 py-2">{voter.age}</td>
                  <td className="px-4 py-2">{voter.status}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEditVoter(voter.id, { status: voter.status === "Active" ? "Inactive" : "Active" })}
                      className="text-indigo-600 hover:text-indigo-800 mr-2"
                    >
                      Toggle Status
                    </button>
                    <button
                      onClick={() => handleRemoveVoter(voter.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
