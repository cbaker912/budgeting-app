import React, { useState } from 'react';
import './App.css';

const categories = [
  "Groceries", "Mortgage", "Travel/Hotel", "Car Payments", "Car Insurance",
  "Takeout Food", "Gas", "Utilities", "Entertainment", "Health Care",
  "Toiletries", "Kids Fund", "Vacation Fund", "Vehicle Maintenance",
  "Clothing Fund", "Pet Fund"
];

function App() {
  const [planned, setPlanned] = useState({});
  const [actual, setActual] = useState({});

  const handleChange = (e, type, category) => {
    const value = parseFloat(e.target.value) || 0;
    const update = type === 'planned' ? {...planned} : {...actual};
    update[category] = value;
    type === 'planned' ? setPlanned(update) : setActual(update);
  };

  return (
    <div className="App">
      <h1>Budgeting App</h1>
      <table>
        <thead>
          <tr><th>Category</th><th>Planned</th><th>Actual</th></tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat}>
              <td>{cat}</td>
              <td><input type="number" onChange={e => handleChange(e, 'planned', cat)} value={planned[cat] || ''}/></td>
              <td><input type="number" onChange={e => handleChange(e, 'actual', cat)} value={actual[cat] || ''}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
