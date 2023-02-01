import Card from "./cards/Card";
import { useState } from "react";

export default function ExpenseCard() {
  const [showSplits, setShowSplits] = useState(false);
  function toggleSplits() {
    setShowSplits((state) => !state);
  }
  return (
    <Card className="cursor-pointer" onClick={showSplits}>
      <div className="flex flex-row justify-between">
        <p className="text-black font-bold text-xl">
          Short Description of the Expense
        </p>
        <p className="lg:ml-10 font-bold text-emerald-800">Amount</p>
      </div>
      <div className="flex">
        <p className="text-gray-800">Paid by:</p>
        <p className="text-gray-600">0x0000000000000000000000000000000</p>
      </div>
      <div id="splits" className={`${!showSplits ? "hidden" : "block"}`}>
        <h3>Split by</h3>
        <div>
          <p>0x0000230423452345234345</p>
          <p>amount</p>
        </div>
        <div>
          <p>0x0000230423452345234345</p>
          <p>amount</p>
        </div>
        <div>
          <p>0x0000230423452345234345</p>
          <p>amount</p>
        </div>
      </div>
      <button className="mt-4 ml-auto px-4 py-1 border-none rounded-lg text-white bg-emerald-800">
        Settle
      </button>
      <div className="flex justify-center">
        {!showSplits ? (
          <button className="text-xl" onClick={toggleSplits}>
            {"\u2304"}
          </button>
        ) : (
          <button className="text-xl" onClick={toggleSplits}>
            {"\u2303"}
          </button>
        )}
      </div>
    </Card>
  );
}
