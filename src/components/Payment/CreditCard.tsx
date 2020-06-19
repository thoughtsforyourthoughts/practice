import * as React from 'react';

const CreditCardPayment: React.FC = () => {
  return (
    <section>
      <h4>Payment</h4>
      <p>
        Credit Card Number: <input type='text'></input>
      </p>
      <p>
        Expiry(mm/yy): <input type='text'></input>
      </p>
      <p>
        CVV: <input type='text'></input>
      </p>
    </section>
  );
};

export default CreditCardPayment;
