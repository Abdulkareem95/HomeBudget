import React from "react";
import { fetchData } from "../Helper";
import { useLoaderData } from "react-router-dom";
import Table from "../components/Table";

export function expenseLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}



const ExpensesPage = () => {
  const { expenses } = useLoaderData();
  console.log(expenses.length);
  return (
    <div className="grid-lg">
      <h1>All Expense</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
};

export default ExpensesPage;
