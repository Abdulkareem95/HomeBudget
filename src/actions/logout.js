// rrd imports
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../Helper";

export async function logoutAction() {
  // delete the user
  deleteItem({
    key: "userName",
  });
  deleteItem({
    key: "budgets",
  });
  deleteItem({
    key: "expenses",
  });

  toast.success("deleted all user data");
  // return redirect
  return redirect("/");
}
