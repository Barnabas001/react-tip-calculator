import { useState } from "react";

export default function App() {
  const [customerBillRating, setCustomerBillRating] = useState(0);
  const [friendBillrating, setfriendBillrating] = useState(0);
  const [billAmount, setBillAmount] = useState(0);

  function customerRating(e) {
    setCustomerBillRating(Number(e.target.value));
  }

  function friendRating(e) {
    setfriendBillrating(Number(e.target.value));
  }

  function handleBillAmount(e) {
    setBillAmount(Number(e.target.value));
  }

  // const customerAverage= setCustomerBillRating

  const average = (customerBillRating + friendBillrating) / 2;

  function buttonReset() {
    setBillAmount(0);
    setCustomerBillRating(0);
    setfriendBillrating(0);
  }

  const total = billAmount + average;

  return (
    <div className="container">
      <BillPrice bill={billAmount} onSetBill={handleBillAmount} />
      <CustomerReview
        billBy={customerBillRating}
        onSelectRating={customerRating}
      />
      <FriendReview
        friendRating={friendBillrating}
        onSelectFriendRating={friendRating}
      />
      <CalculatedBill bill={billAmount} average={average} total={total} />
      <ResetButton reset={buttonReset} />
    </div>
  );
}

function BillPrice({ bill, onSetBill }) {
  return (
    <p>
      How much was the bill?
      <input placeholder="0" value={bill} onChange={onSetBill} />
    </p>
  );
}
function CustomerReview({ billBy, onSelectRating }) {
  return (
    <p>
      How did you like the service?
      <select value={billBy} onChange={onSelectRating}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </p>
  );
}
function FriendReview({ friendRating, onSelectFriendRating }) {
  return (
    <p>
      How did your friend like the service?
      <select value={friendRating} onChange={onSelectFriendRating}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </p>
  );
}

function CalculatedBill({ bill, average, total }) {
  return (
    <h2>
      You pay ${total} (${bill} + ${average})
    </h2>
  );
}

function ResetButton({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
