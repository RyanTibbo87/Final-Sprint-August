import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Confetti from "react-confetti";

// Setting up the checkout form
const Checkout = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { clearCart } = useContext(CartContext);

  // Once you enter your information and click  submit, a success message + confetti will show (I took this idea from another student because I thought it was awesome, heh.)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Information:", { name, cardNumber, expiryDate, cvc });
    setCheckoutMessage("Payment Successful. Thank you for your purchase!");
    setShowConfetti(true);
    setTimeout(() => {
      setCheckoutMessage("");
      setShowConfetti(false);
    }, 5000);

    clearCart();
    setName("");
    setCardNumber("");
    setExpiryDate("");
    setCvc("");
  };
  return (
    <div className="checkout-form">
      <h3>Checkout:</h3>
      {showConfetti && <Confetti />}
      {checkoutMessage && <div className="checkout-msg">{checkoutMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div>
          <label>Credit Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="16 Digits"
            maxLength={16} // credit card is max 16 digits
            required
          />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength={5} // max 5 characters
            required
          />
        </div>
        <div>
          <label>CVC:</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="Security #"
            maxLength={3} // max 3 digits
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Checkout;
