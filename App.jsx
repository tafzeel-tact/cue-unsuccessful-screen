import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import W1A5bUnsuccessfulError from "./components/W1A5bUnsuccessfulError";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|w1-a5-b-unsuccessful-error)">
          <W1A5bUnsuccessfulError {...w1A5bUnsuccessfulErrorData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const menuData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo-14@2x.png",
    googleplayA1B4Ed6211C913: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/googleplay-a1b4ed6211c9--1--3@2x.png",
    appstore6F955D329Ad713: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/appstore-6f955d329ad7--1--3@2x.png",
};

const property1ImageFailedData = {
    image: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/rectangle-444-6@2x.png",
    image794: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/image-794-2@2x.png",
};

const headerData = {
    transactionSuccessful: "transaction unsuccessful",
    theCueHasBeenAdd: "any amount deducted will be refunded in 7-10 working days. how would you like to proceed?",
};

const logIn2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/log-in--2--1@1x.png",
};

const downloadComponentData = {
    logIn2Props: logIn2Data,
};

const group38711Data = {
    fb: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/fb@2x.png",
    twitter: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/twitter@2x.png",
    insta: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f2949a21d6481255052506/img/insta@2x.png",
};

const footerData = {
    logo: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/logo@2x.png",
    group38711Props: group38711Data,
};

const w1A5bUnsuccessfulErrorData = {
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/bg-card@1x.png",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/bg-@1x.png",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f39622916a8ac11b450146/img/receipt-bg-3@1x.png",
    title: "Ka se Kitab 18- Balbeer Punj in conversation with Himanshu Bajpai",
    address: "08 Aug 21   l   09:30 PM",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/line-34@1x.png",
    amount: "Amount",
    total: "Total",
    surname: "Price - ₹450",
    text9: "₹450",
    retryPayment: "Retry Payment",
    menuProps: menuData,
    property1ImageFailedProps: property1ImageFailedData,
    headerProps: headerData,
    downloadComponentProps: downloadComponentData,
    footerProps: footerData,
};

