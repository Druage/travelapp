import React from 'react'
import {Dashboard} from "./Dashboard";
import {ExpensesReport} from "./ExpensesReport";
import {AddExpensePane} from "./AddExpensePane";

export function FinancePage() {

    return (
        <Dashboard>
            <div className="flex-1 flex xl:overflow-hidden">
                {/* Primary column */}
                <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
                >

                    {/* Your content */}

                    <ExpensesReport/>

                </section>

                {/* Secondary column (hidden on smaller screens) */}
                <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                    <AddExpensePane/>
                </aside>
            </div>
        </Dashboard>
    )
}
