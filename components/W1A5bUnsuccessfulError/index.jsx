import React from "react";
import Menu from "../Menu";
import Property1ImageFailed from "../Property1ImageFailed";
import Header from "../Header";
import DownloadComponent from "../DownloadComponent";
import Footer from "../Footer";
import "./W1A5bUnsuccessfulError.css";

function W1A5bUnsuccessfulError(props) {
  const {
    overlapGroup4,
    overlapGroup1,
    overlapGroup2,
    title,
    address,
    divider,
    amount,
    total,
    surname,
    text9,
    retryPayment,
    menuProps,
    property1ImageFailedProps,
    headerProps,
    downloadComponentProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="w1-a5-b-unsuccessful-error screen" name="form1" action="form1" method="post">
        <Menu
          logo={menuProps.logo}
          googleplayA1B4Ed6211C913={menuProps.googleplayA1B4Ed6211C913}
          appstore6F955D329Ad713={menuProps.appstore6F955D329Ad713}
        />
        <div className="overlap-group4" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <Property1ImageFailed
              image={property1ImageFailedProps.image}
              image794={property1ImageFailedProps.image794}
            />
            <Header
              transactionSuccessful={headerProps.transactionSuccessful}
              theCueHasBeenAdd={headerProps.theCueHasBeenAdd}
            />
            <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="card-information">
                <div className="title poppins-normal-eerie-black-24px">{title}</div>
                <div className="time-tag">
                  <p className="address valign-text-middle poppins-normal-white-16px">{address}</p>
                </div>
              </div>
              <img className="divider" src={divider} />
              <div className="price-information">
                <div className="heading poppins-normal-eerie-black-18px">
                  <div className="amount valign-text-middle">{amount}</div>
                  <div className="total valign-text-middle">{total}</div>
                </div>
                <div className="price poppins-normal-eerie-black-22px">
                  <div className="surname valign-text-middle">{surname}</div>
                  <div className="text-1 valign-text-middle">{text9}</div>
                </div>
              </div>
            </div>
            <a href="javascript:SubmitForm('form1')">
              <div className="retry-payment">
                <div className="overlap-group">
                  <div className="retry-payment-1 valign-text-middle poppins-normal-peach-cream-16px">
                    {retryPayment}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <DownloadComponent logIn2Props={downloadComponentProps.logIn2Props} />
        <Footer logo={footerProps.logo} group38711Props={footerProps.group38711Props} />
      </form>
    </div>
  );
}

export default W1A5bUnsuccessfulError;
