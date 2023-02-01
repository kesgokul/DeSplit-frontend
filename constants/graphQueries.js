import { gql } from "@apollo/client";
import { Bytes } from "ethers";

const GET_ACTIVE_EXPENSES = gql`
  query ActiveExpensesQuery($userAddress: string!) {
    activeExpenses(where: { splitBy: { contains: $userAddress } }) {
      payer
      to
      splitBy
      splitAmounts
      expenseIndex
    }
  }
`;
