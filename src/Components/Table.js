import React, { useState, useEffect } from "react";
import Search from "./Search";

function Table({ data }) {
  const [records, setRecords] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm !== "") {
      let filteredData = data.filter((item) => {
        return item.description.toLowerCase().includes(searchTerm);
      });
      setRecords(filteredData);
    } else {
      setRecords(data);
    }
  }, [searchTerm]);
  const tableId = records.map((description, index) => {
    return (
      <tr key={index}>
        <td>{description.id}</td>
        <td>{description.date}</td>
        <td>{description.description}</td>
        <td>{description.category}</td>
        <td>{description.amount}</td>
      </tr>
    );
  });

  function handleSearch(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  return (
    <>
      <Search func={handleSearch} />

      <div className="section">
        <table>
          <caption>Transaction history</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{tableId}</tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
