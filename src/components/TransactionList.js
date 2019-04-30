import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, onDelete }) =>
  transactions
    .map((transaction, key) => (
      <Transaction key={key} data={transaction} onDelete={onDelete} />
    ))
    .reverse();

export default TransactionList;
