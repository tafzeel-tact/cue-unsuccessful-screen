import React from "react";
import "./Header.css";

function Header(props) {
  const { transactionSuccessful, theCueHasBeenAdd } = props;

  return (
    <div className="header">
      <div className="transaction-un-successful valign-text-middle poppins-normal-eerie-black-24px">
        {transactionSuccessful}
      </div>
      <div className="any-amount-deducted poppins-normal-granite-gray-18px">{theCueHasBeenAdd}</div>
    </div>
  );
}

export default Header;
