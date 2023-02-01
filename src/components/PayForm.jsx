import Card from "./cards/Card";
import { Form, Input } from "@web3uikit/core";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function () {
  const [numSplits, setNumSplits] = useState(0);
  const [splitInputs, setSplitInputs] = useState([]);

  function handlePayFormSubmit(data) {
    const toAddress = data.data[0].inputResult;
    const toAmount = ethers.utils.parseEther(data.data[1].inputResult);
    const splitAddresses = [];
    const splitAmounts = [];

    data.data.forEach((dataObj) => {
      if (dataObj.inputName.includes("split") && dataObj.inputResult !== "") {
        splitAddresses.push(dataObj.inputResult);
      }
      if (dataObj.inputName.includes("Amount") && dataObj.inputResult !== "") {
        splitAmounts.push(ethers.utils.parseEther(dataObj.inputResult));
      }
    });
    // console.log(splitAddresses, splitAmounts);
  }

  // To change the number of Inputs for splits according to user input
  useEffect(() => {
    const tempInputs = [];
    for (let i = 0; i < numSplits; i++) {
      tempInputs.push(
        {
          name: "split With",
          type: "text",
          value: "",
          key: "splitAddress",
        },
        {
          name: "Amount",
          type: "number",
          value: "",
          key: "splitAmount",
        }
      );
    }
    setSplitInputs(tempInputs);
  }, [numSplits]);

  return (
    <Card>
      <div className="py-4 pl-2 flex gap-4 items-center">
        <label htmlFor="numSplits">Number of Splits:</label>
        <input
          className="bg-gray-100 py-1 px-1 w-20 border-2 focus:border-emerald-100 rounded-xl"
          type="number"
          min={1}
          onChange={(event) => setNumSplits(event.target.value)}
        />
      </div>
      <Form
        title="Pay and Split"
        data={[
          {
            name: "To",
            type: "text",
            value: "",
            key: "toAddress",
            validation: {
              required: true,
            },
          },
          {
            name: "Value",
            type: "number",
            value: "",
            key: "vlaue",
            validation: {
              required: true,
            },
          },
          ...splitInputs,
        ]}
        id="payForm"
        onSubmit={handlePayFormSubmit}
      />
    </Card>
  );
}
