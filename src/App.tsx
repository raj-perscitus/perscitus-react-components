import React from "react";
import { Amplify } from "aws-amplify";
import {
  CardTile,
  UpdatesCard,
  Button,
  InteractiveList,
  Footer,
  Header,
  Authentication,
  MyReimbursement,
  TextFieldSample,
} from "./library/components";
import { cardTitleData, updatesData, bannerProps, footerProps } from "./data";
import PHCSLogo from "./library/assests/images/phcs.jpg";
import LogoImage from "./library/assests/images/netwell-logo.png";
import NoticationActiveIcon from "./library/assests/images/my_notifications_icon_active.svg";
import { ReactComponent as DashboardIconActive } from "./library/assests/images/dashboard_ icon_active.svg";
import { ReactComponent as DashboardIcon } from "./library/assests/images/dashboard_icon.svg";
import { ReactComponent as DocumentsIcon } from "./library/assests/images/documents_icon_wh.svg";
import { ReactComponent as DocumentsIconActive } from "./library/assests/images/documents_icon_wh_active.svg";
import { RightTabs } from "./library/components/RightTabs";
import PharmaBenefits from "./library/assests/images/pharma_benefits_icon_active.svg";
import { HeaderTabsComponent } from "./library/components/HeaderTabs";
import { ProgramInfoFooter } from "./library/components/ProgramInfoFooter";
import "./App.css";
import "./library/assests/css/uhf.css";
import "./library/assests/css/netwell.css";
import "./library/assests/css/common.css";
import { Dialog } from "./library/components/Dialog";
import { CustomButtonProps } from "./library/components/Button";
import HealthActive from "./library/assests/images/my_health_icon_active.png";
import Active from "./library/assests/images/dashboard_ icon_active.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "@mui/material";

const awsConfig = {
  aws_project_region: "us-east-2",
  aws_cognito_identity_pool_id:
    "us-east-2:95e974f6-64f7-4d66-97af-7c5fd257e36c",
  aws_user_pools_id: "us-east-2_26UgIcCGf",
  aws_user_pools_web_client_id: "4o4frtks2d7gtvk5lhughq6h9j",
  oauth: {},
};

Amplify.configure(awsConfig);

function App() {
  return (
    <div className="Apps UHF">
      {/* <MyShareRequests mode="prod" 
        appConfig={{
          sessionURL: "https://dev.fabric.carynhealth.com/api/",
          tokenUserName: "netwell",
          tokenUserPassword: "netwell",
          brand: "netwell",
        }} /> */}
      {/* <MyReimbursement /> */}
      {/* <ProductCardWrapper {...productWrapperData} />
      <div className="d-flex">
        {addons.map((addOn) => (
          <Addons {...addOn} />
        ))}
      </div>
      <EnrolledMembers
        headings={enrollMembers.headings}
        list={[...enrollMembers.list, ...enrollMembers.list]}
      />
      <Detail list={[{ title: "Telemedicine", subTitle: "$0" }]} />
      <Summary {...PISummary} /> */}
      <Header
        user="ABCD"
        variant="mobile"
        MobileViewComponant={() => (
          <div className="mobile_headerNetWell">
            <Link
              style={{ color: "#000", width: "24px", height: "24px" }}
              href="/"
            >
              <ArrowBackIcon></ArrowBackIcon>
            </Link>
            <div className="mobile_header_titleNetWell">ASAS</div>
          </div>
        )}
        rightSectionIconList={{
          rightCallBack: (data) => {
            console.log(data);
          },
          Iconlist: [
            {
              alt: "notifiction",
              image: NoticationActiveIcon,
              Component: () => (
                <section id="example-card-title">
                  {cardTitleData.map((tile) => (
                    <CardTile {...tile} />
                  ))}
                </section>
              ),
              badge: 4,
            },
            {
              alt: "notifiction",
              image: NoticationActiveIcon,
              Component: () => (
                <section id="example-list">
                  <UpdatesCard
                    image={PHCSLogo}
                    title="My Notifications"
                    Component={() => (
                      <>
                        <InteractiveList
                          onClick={console.log}
                          list={[
                            {
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                            {
                              label: "Reminder",
                              labelRight: "12:44 PM",
                              description:
                                "Your documents method has been changed.",
                            },
                          ]}
                        />
                      </>
                    )}
                  />
                </section>
              ),
            },
            {
              alt: "logout",
              image: require("./library/assests/images/logout.png"),
            },
          ],
        }}
        listOfSideBarStyle={{
          // backgroundColor: "white",
          color: "black",
          listItemText: {
            fontSize: "16px",
            fontWeight: "bold",
          },
          StyledList: {
            "&& .Mui-selected, && .Mui-selected:hover": {
              backgroundColor: " #e5e7ea",
              borderRight: "5px solid #162242",
              "&, & .MuiListItemIcon-root": {
                color: "black",
              },
            },
            "& .MuiListItemButton-root:hover": {
              backgroundColor: "#e5e7ea",
              borderRight: "5px solid #162242",
              "&, & .MuiListItemIcon-root": {
                color: "black",
              },
            },
          },
        }}
        user="ABCD XYZ"
        logoImage={LogoImage}
        sideBarData={{
          sideBarCallBack: (data) => {
            console.log(data);
          },
          selectedItem: {
            selectedIndex: 0,
            pageName: "Dashboard",
          },
          listOfSideBar: [
            {
              icon: NoticationActiveIcon,
              text: "Dashboard",
            },
            {
              icon: NoticationActiveIcon,
              text: "My Notifications",
            },
            {
              icon: NoticationActiveIcon,
              text: "Announcements & Notices",
            },
            {
              icon: NoticationActiveIcon,
              text: "Documents",
            },
            {
              icon: NoticationActiveIcon,
              text: "Find a Provider",
            },
            {
              icon: NoticationActiveIcon,
              text: "Membership Card",
            },
            {
              icon: NoticationActiveIcon,
              text: "Program Information",
            },
            {
              icon: NoticationActiveIcon,
              text: "Share Requests",
            },
            {
              icon: NoticationActiveIcon,
              text: "My Transactions",
            },
            {
              icon: NoticationActiveIcon,
              text: "Health Questionnaire",
            },
            {
              icon: NoticationActiveIcon,
              text: "Contact Information",
            },
            {
              icon: NoticationActiveIcon,
              text: "HIPAA Privacy Authorization",
            },
            {
              icon: NoticationActiveIcon,
              text: "Sign Out",
            },
          ],
        }}
      />
      <HeaderTabsComponent
        data={[
          {
            text: "Member services",
          },
          {
            text: "Member Apps",
            Component: (
              <div>
                <img width={100} src={PharmaBenefits} />
                <h2>pharma</h2>
              </div>
            ),
            PopupComponent: ({ close }: any) => {
              console.log(close);
              return (
                <div className="popupContant">
                  <div
                    className="web_checkoutboldtext"
                    style={{ fontSize: "3vw" }}
                  >
                    Check out Member Apps
                  </div>
                  <div
                    className="web_tooltip_2nd_text"
                    style={{ fontSize: "2vw" }}
                  >
                    Talk to a doctor 24/7 for $0 using our Telemedicine App
                  </div>
                  <button
                    className="yellow_popup_caption_button"
                    onClick={close}
                    style={{ top: "65%", fontSize: "2vw" }}
                  >
                    CLOSE
                  </button>
                </div>
              );
            },
          },
        ]}
        callBack={(data) => console.log(data)}
      />
      <RightTabs
        data={[
          {
            image: HealthActive,
            text: "Member Apps",
            Component: (
              <div style={{ padding: 20 }}>
                <img width={100} src={PharmaBenefits} />
                <h2>pharma</h2>
              </div>
            ),
            PopupComponent: ({ close }: any) => {
              console.log(close);
              return (
                <div className="popupContant">
                  <div className="web_checkoutboldtext">
                    Check out Member Apps
                  </div>
                  <div className="web_tooltip_2nd_text">
                    Talk to a doctor 24/7 for $0 using our Telemedicine App
                  </div>
                  <button
                    className="yellow_popup_caption_button"
                    onClick={close}
                  >
                    CLOSE
                  </button>
                </div>
              );
            },
            style: {
              backgroundColor: "#ff5417",
            },
          },
          {
            image: Active,
            text: "AI Assistant",
            style: {
              backgroundColor: "#eb5757",
            },
          },
        ]}
        callBack={(data: any) => console.log("RightTab=", data)}
      />
      <Authentication
        config="LOGIN"
        authCallback={(e) => console.log("e::: ", e)}
        awsConfig={awsConfig}
        appConfig={{
          sessionURL: "https://dev.fabric.carynhealth.com/api/",
          tokenUserName: "netwell",
          tokenUserPassword: "netwell",
          brand: "netwell",
        }}
        bannerProps={bannerProps}
      />
      <ProgramInfoFooter
        label={""}
        leftSectionbuttons={[
          {
            label: "Close",
            size: "large",
            variant: "text",
            type: "button",
            className: "Close",
          } as CustomButtonProps,
          {
            label: "Close",
            size: "large",
            variant: "text",
            type: "button",
            className: "Close",
          } as CustomButtonProps,
        ]}
        leftSectionStyle={{
          backgroundColor: "blue",
          borderRadius: 20,
          color: "white",
        }}
        rightSectionText={
          "Call our netWell Representative \n on (866) NETWELL (638-9355)."
        }
        handleCallback={(data: any) => {
          console.log("Function not implemented.");
        }}
      />

      <TextFieldSample
        fieldType={"name"}
        InputProps={<DashboardIcon></DashboardIcon>}
        error={true}
        label={"abc"}
        name={"abc"}
        value={"abc"}
        helperText={"msg"}
        onChange={(e) => console.log(e.target.value)}
        disable={false}
        required={true}
        InputLabelProps={{
          style: {
            color: "#FA1515",
          },
        }}
        inputProps={{
          maxLength: 100,
        }}
        type={""}
      />
      <section id="example-card-title">
        {cardTitleData.map((tile) => (
          <CardTile {...tile} />
        ))}
      </section>
      <section hidden style={{ background: "#ccc" }} id="example-button">
        <Button variant="contained" label="Button" size="small" />
      </section>
      <section
        id="example-list"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[...new Array(4)].map((nouse: any) => (
          <UpdatesCard
            image={PHCSLogo}
            title="My Notifications"
            loading={false}
            errorMessage=""
            viewBtnDisplay={false}
            Component={() => (
              <>
                <InteractiveList onClick={console.log} list={updatesData} />
              </>
            )}
          />
        ))}
      </section>
      <Footer
        {...footerProps}
        bottomNavgation={{
          bottomNavCallBack(data) {
            console.log(data);
          },
          selectedIndex: 1,
          styleBottomNav: {
            fontSize: " 2rem !important",
          },
          bottomIconList: [
            {
              icon: <DashboardIcon />,
              activeIcon: <DashboardIconActive />,
              label: "Dashboard",
            },
            {
              icon: <DocumentsIcon />,
              activeIcon: <DocumentsIconActive />,
              label: "Documents",
            },
            {
              icon: <DashboardIcon />,
              activeIcon: <DashboardIconActive />,
              label: "My Needs",
            },
          ],
        }}
      />
      <Dialog
        show={true}
        title={"Aenean lacinia bibendum nulla "}
        body={() => (
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        )}
        CloseIcon={true}
        buttons={[
          {
            label: "Close",
            size: "large",
            variant: "text",
            type: "button",
            className: "Close",
          } as CustomButtonProps,
        ]}
        handleCallback={(data: any) => {
          console.log("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
