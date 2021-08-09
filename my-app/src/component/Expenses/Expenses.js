import Card from "../UI/Card";
import Exp from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [Filterdate, setFilterDate] = useState("2020"); //Two way binding we set the Filterdate as 2020

  const dateFilterHandler = (selectedYear) => {
    setFilterDate(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectYear={Filterdate} // return the state old to the Expensefilter JS
          dateFilter={dateFilterHandler} //get the new state value from the ExpenseFilter JS
        />
       
        {props.items.map( //map is used to render the value of the copy
          ( expense ) => (  
            <Exp
              key={expense.id}  // This Key is very important that helps the html and says it unique in case we dont use it we have a error "key"
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )
        )}
        
      </Card>
    </div>
  );
};

export default Expenses;
