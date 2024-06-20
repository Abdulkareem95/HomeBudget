import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard, { dashboardAction } from "./pages/DashBoard";
import Error from "./pages/Error";
import { dashboardLoader } from "./pages/DashBoard";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, { expenseLoader } from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import { deleteBudget } from "./actions/deleteBudget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <DashBoard />,
        action: dashboardAction,
        loader: dashboardLoader,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expenseLoader,
      },
      {
        path: "/about",
        element: <p>about</p>,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
