import React, { FC, useEffect, useState } from 'react';
import { PayButton } from '@paybutton/react';

const Donate: FC = () => {
  const to = 'bitcoincash:qrltmmtc4srnf2eyfcyzyuq07t8hxzc7fcw6d4qzx8';
  const amount = 2;
  const currency = 'USD';
  const text = 'Buy me a drink :)';
  const hoverText = 'Fee: $2';

  const [showThanks, setShowThanks] = useState(false);
  useEffect(() => {
    if (showThanks) {
      setTimeout(() => setShowThanks(false), 10000);
    }
  }, [showThanks]);

  return (
    <div className={`w-full flex justify-center my-8`}>
      <PayButton
        to={to}
        amount={amount}
        currency={currency}
        text={text}
        hoverText={hoverText}
        onSuccess={() => setShowThanks(true)}
      />
      {showThanks ? <p className={`mt-2`}>{'Thank you very much!'}</p> : null}
    </div>
  );
};

export default Donate;
