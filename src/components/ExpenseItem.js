import React from "react";
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../Helper";
import { Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expenses }) => {
  const fetcher = useFetcher();
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expenses.budgetId,
  })[0];
 
  return (
    <>
      <td>{expenses.name}</td>
      <td>{formatCurrency(expenses.amount)}</td>
      <td>{formatDateToLocaleString(expenses.createdAt)}</td>
      <td>
        <Link
          to={`/budget/${budget.id}`}
          style={{
            "--accent": budget.color,
          }}
        >
          {budget.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expenses.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expenses.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
