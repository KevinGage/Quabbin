"use client";

import React, { useState, useEffect } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { stringToOunces } from "@/app/lib/conversions";

export default function DataTable({ data }) {
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortedData, setSortedData] = useState([...data]);
  const [filterText, setFilterText] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedWinner, setSelectedWinner] = useState("");
  const [weightComparisonOperator, setWeightComparisonOperator] = useState("");
  const [weightComparisonValue, setWeightComparisonValue] = useState("");
  const [lbsComparisonOperator, setLbsComparisonOperator] = useState("");
  const [lbsComparisonValue, setLbsComparisonValue] = useState("");
  const [yearComparisonOperator, setYearComparisonOperator] = useState("");
  const [yearComparisonValue, setYearComparisonValue] = useState("");

  useEffect(() => {
    let sorted = [...data];
    if (sortField !== null) {
      sorted.sort((a, b) => {
        let aValue = a[sortField];
        let bValue = b[sortField];

        // Convert weights to ounces if sorting by 'Weight in Lbs'
        if (sortField === "Weight") {
          aValue = stringToOunces(aValue);
          bValue = stringToOunces(bValue);
        }

        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    if (filterText !== "") {
      sorted = sorted.filter((item) =>
        item.Name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
    if (selectedSpecies !== "") {
      sorted = sorted.filter((item) => item.Species === selectedSpecies);
    }
    if (selectedWinner !== "") {
      sorted = sorted.filter(
        (item) => item.Winner.toString() === selectedWinner
      );
    }
    if (weightComparisonOperator !== "" && weightComparisonValue !== "") {
      sorted = sorted.filter((item) => {
        if (weightComparisonOperator === ">") {
          return item.Oz > weightComparisonValue;
        } else {
          return item.Oz < weightComparisonValue;
        }
      });
    }
    if (lbsComparisonOperator !== "" && lbsComparisonValue !== "") {
      sorted = sorted.filter((item) => {
        if (lbsComparisonOperator === ">") {
          return (
            stringToOunces(item.Weight) > stringToOunces(lbsComparisonValue)
          );
        } else {
          return (
            stringToOunces(item.Weight) < stringToOunces(lbsComparisonValue)
          );
        }
      });
    }
    if (yearComparisonOperator !== "" && yearComparisonValue !== "") {
      sorted = sorted.filter((item) => {
        if (yearComparisonOperator === ">") {
          return item.Year > yearComparisonValue;
        } else {
          return item.Year < yearComparisonValue;
        }
      });
    }
    setSortedData(sorted);
  }, [
    data,
    sortField,
    sortDirection,
    filterText,
    selectedSpecies,
    selectedWinner,
    weightComparisonOperator,
    weightComparisonValue,
    lbsComparisonOperator,
    lbsComparisonValue,
    yearComparisonOperator,
    yearComparisonValue,
  ]);

  const handleSort = (field) => {
    setSortField(field);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const getSortIcon = (field) => {
    if (sortField !== field) {
      return <FaSort />;
    }
    return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const speciesOptions = [...new Set(data.map((item) => item.Species))];

  return (
    <div className="m-2">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Name")}
                >
                  Name {getSortIcon("Name")}
                </div>
                <input
                  className="text-black"
                  type="text"
                  placeholder="Filter by name"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
              </div>
            </th>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Species")}
                >
                  Species {getSortIcon("Species")}
                </div>
                <select
                  className="text-black"
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                >
                  <option value="">All Species</option>
                  {speciesOptions.map((species, i) => (
                    <option key={i} value={species}>
                      {species}
                    </option>
                  ))}
                </select>
              </div>
            </th>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Oz")}
                >
                  Weight in Oz {getSortIcon("Oz")}
                </div>
                <select
                  className="text-black mx-2"
                  value={weightComparisonOperator}
                  onChange={(e) => setWeightComparisonOperator(e.target.value)}
                >
                  <option value="">All Weights</option>
                  <option value=">">Greater than</option>
                  <option value="<">Less than</option>
                </select>
                <input
                  className="text-black"
                  type="number"
                  placeholder="Weight in Oz"
                  value={weightComparisonValue}
                  onChange={(e) => setWeightComparisonValue(e.target.value)}
                />
              </div>
            </th>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Weight")}
                >
                  Weight in Lbs {getSortIcon("Weight")}
                </div>
                <select
                  className="text-black mx-2"
                  value={lbsComparisonOperator}
                  onChange={(e) => setLbsComparisonOperator(e.target.value)}
                >
                  <option value="">All Weights</option>
                  <option value=">">Greater than</option>
                  <option value="<">Less than</option>
                </select>
                <input
                  className="text-black"
                  type="number"
                  placeholder="Weight in Lbs"
                  value={lbsComparisonValue}
                  onChange={(e) => setLbsComparisonValue(e.target.value)}
                />
              </div>
            </th>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Year")}
                >
                  Year {getSortIcon("Year")}
                </div>
                <select
                  className="text-black mx-2"
                  value={yearComparisonOperator}
                  onChange={(e) => setYearComparisonOperator(e.target.value)}
                >
                  <option value="">All Years</option>
                  <option value=">">After</option>
                  <option value="<">Before</option>
                </select>
                <input
                  className="text-black"
                  type="number"
                  placeholder="Year"
                  value={yearComparisonValue}
                  onChange={(e) => setYearComparisonValue(e.target.value)}
                />
              </div>
            </th>
            <th className="p-2">
              <div>
                <div
                  className="flex flex-row px-2 justify-center"
                  onClick={() => handleSort("Winner")}
                >
                  Winner {getSortIcon("Winner")}
                </div>
                <select
                  className="text-black"
                  value={selectedWinner}
                  onChange={(e) => setSelectedWinner(e.target.value)}
                >
                  <option value="">All Winners</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, i) => (
            <tr key={i}>
              <td>{row.Name}</td>
              <td>{row.Species}</td>
              <td>{row.Oz}</td>
              <td>{row.Weight}</td>
              <td>{row.Year}</td>
              <td>{row.Winner.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
