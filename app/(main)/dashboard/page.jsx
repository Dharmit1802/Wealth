import { Card, CardContent } from "@/components/ui/card.jsx";
import CreateAccountDrawer from "../../../components/create-account-drawer.jsx";
import React from "react";
import { Plus } from "lucide-react";
import { getDashboardData, getUserAccounts } from "@/actions/dashboard.js";
import AccountCard from "./_componenets/account-card.jsx";
import { getCurrentBudget } from "@/actions/budget.js";
import BudgetProgress from "./_componenets/budget-progress.jsx";
import { DashboardOverview } from "./_componenets/transaction-overview.jsx";

async function Dashboard() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((acc) => acc.isDefault);

  let budgetData = null;

  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* budget drawer */}
      {defaultAccount && (
        <BudgetProgress
          initialBudget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        ></BudgetProgress>
      )}

      {/* overview */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* account drawer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex items-center justify-center flex-col text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
        {accounts.length > 0 &&
          accounts.map((account) => {
            return <AccountCard key={account.id} account={account} />;
          })}
      </div>
    </div>
  );
}

export default Dashboard;
