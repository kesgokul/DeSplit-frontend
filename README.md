# DeSplit

## A decentralised app for spliting payments with friends

This repo contains the front-end code for the above mentioned app.

## Functions

### UI

1. The UI display all the expenses that the user's address is a part of.
2. Allows the user to make a payment to any address on behalf of a group, that is to be split by a group.
3. Allows the user to Repay the split amount of any expense they were a part of.

### Contract functions

1. The App allows user to deposit any amount of Ether into the contract; that can be used to make payments.
2. This app Allows a user to make a payment to any address (on behalf of a group) and then split the payment with the group.

It keeps track of,

- The balance Ether deposited into the contract by each user.
- All expenses,
- The group of addresses the expense is split between and the respective split amount.

3.  Allows user to settle an amount owed to the payer of a particular expense that they are a part of
4.  Allows user to withdraw any remaining balance of Ether that is mapped to their address.
