import React, { useState, useMemo } from "react";
import Pagination from "./component/Pagination";
import data from "./data/data.json";
import './App.css';

let PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="container">
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}
