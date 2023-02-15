import React, { SyntheticEvent } from "react";
import NetwellLogo from "./library/assests/images/netwellLogo.png";
import PHCSLogo from "./library/assests/images/phcs.jpg";
import { Addons } from "./library/components";
import { ReactComponent as DashboardIconActive } from "./library/assests/images/dashboard_ icon_active.svg";
import { ReactComponent as DashboardIcon } from "./library/assests/images/dashboard_icon.svg";
import { ReactComponent as DocumentsIcon } from "./library/assests/images/documents_icon_wh.svg";
import { ReactComponent as DocumentsIconActive } from "./library/assests/images/documents_icon_wh_active.svg";

export const productWrapperData = {
  title: "Title",
  tabs: [
    { label: "one", id: "one" },
    { label: "two", id: "two" },
  ],
  Component: Addons,
  footerText: "<p>Chat with our Health Share Representative</p>",
};
export const transactionData = {
  titleOne: "RECENT TRANSACTIONS",
  ComponentOne: Addons,
  titleTwo: "PAYMENT INFORMATION",
  ComponentTwo: Addons,
};

export const PISummary = {
  programName: {
    title: "WellLife+",
    subTitle: "WELP5000",
  },
  headerSumary: {
    title: "Summary",
    subTitle: "Non-Sharable amount",
    progress: 10,
    met: 0,
    remaining: 6000,
  },
  shareSummary: {
    title: "Summary",
    subTitle: "Non-Sharable amount",
    progress: 0,
    met: 0,
    remaining: 6000,
  },
  changeProgram: {
    url:
      "https://dev.fabric.carynhealth.com/api/v1/memberportal/caseCreation" ||
      localStorage.getItem("sourceid"),
    Subject: "1604411970638",
    Origin: "External",
    External_Application_Name__c: "Member Portal",
    Status: "New",
    Type: "Account Update",
    SuppliedEmail: localStorage.getItem("userMail"),
    Description: "Request to change",
  },
};

export const addons = [
  {
    title: "RxSimpleShare",
    active: false,
  },
  {
    title: "Health Tools",
    active: true,
    membersRolled: ["Diego Carlos", "Lisa Carlos"],
    effectiveDate: ["05:22 PM", "05:22 PM"],
  },
];

export const enrollMembers = {
  headings: [
    { id: "member-name", label: "Member Name" },
    { id: "relation-ship", label: "Relationship" },
    { id: "birth-date", label: "Birth Date" },
    { id: "birth-gender", label: "Birth Gender" },
    { id: "effective-date", label: "Effective Date" },
  ],
  list: [
    {
      "member-name": "member-name",
      "relation-ship": "relation-ship",
      "birth-date": "birth-date",
      "birth-gender": "birth-gender",
      "effective-date": "effective-date",
    },
  ],
};

export const list = [
  { title: "MemberID", value: "444633862" },
  { title: "Head of Household  ", value: "444633862" },
  { title: "Group #:", value: "444633862" },
  { title: "Household", value: "444633862" },
  { title: "Membership Type", value: "444633862" },
];

export const idCardsProps = {
  list,
  depends: {
    heading: "Depends",
    list: ["USERTHREE DTEST", "USERTHREE DTEST", "USERTHREE DTEST"],
  },
  leftImg: {
    src: NetwellLogo,
  },
  rightImg: {
    src: PHCSLogo,
  },
  teleMedicine: {
    heading: "TALK TO A TELEMEDICINE PHYSICIAN 24/7",
    description: "$0 CO-PAY | 833- SWIFTMD | (833) 794-3863",
  },
  note: {
    text: "This card certifies Membership in a Healthcare Sharing Ministry pursuant to 26 USC § 5000A(d)(2)(B)(ii). This is not an insurance plan. This is a medical bill sharing program for qualified Members.",
  },
  widgets: [
    {
      heading: "Visit Fee",
      list: [
        {
          title: "PCP:",
          value: "$35.00",
        },
        {
          title: "Specialist:",
          value: "$55.00",
        },
        {
          title: "Urgent Care:",
          value: "$55.00",
        },
        {
          title: "ER:",
          value: "$500.00",
        },
      ],
      highLightList: false,
      style: {},
    },
    {
      heading: "Pharmacy",
      list: [
        {
          title: "APS NPI",
          value: "1356814529",
        },
        {
          title: "NCPDP",
          value: "3686675",
        },
      ],
      highLightList: true,
      style: {
        background: "#fce9cc",
      },
    },
    {
      heading: "",
      list: [
        {
          title: "RxBIN",
          value: "021981",
        },
        {
          title: "RxPCN",
          value: "APS",
        },
        {
          title: "RxGRP",
          value: "NETWELL2",
        },
      ],
      highLightList: true,
      style: {
        background: "#fce9cc",
      },
    },
  ],
  CallComponent: () => null,
};

export const data = {
  frontView: idCardsProps,
  backView: {
    BVleftWidgets: idCardsProps.widgets.map((data) => ({
      ...data,
      description: "",
      style: { boxShadow: "none" },
    })),
    BVrightWidgets: [
      {
        text: "netWell PO Box 14267 Reading, PA 19612-4267",
        EdiId: "22232",
        heading: "Send Share Requests to:",
      },
      {
        heading: "Pre-Authorization/Advance Opinion",
        text: "Members, providers and facilities may call in advance for an opinion of eligibility regarding medical services.",
        style: {
          background: "#ffefd1",
        },
      },
    ],
    footer: {
      registeredText: "Aetna Dental Access®",
      // Link: () => (
      //   <b style={{ cursor: "pointer" }}>
      //     www.<b style={{ color: "rgb(71, 130, 197)" }}>net</b>
      //     <b style={{ color: "rgb(169, 196, 80)" }}>Well</b>.com
      //   </b>
      // ),
      img: {
        src: PHCSLogo,
        alt: "Multiplan",
        subTitle: "Complementary Network",
      },
      note: "Call 877-952-7427 or visit netwell.network to find a PHCS Provider",
    },
  },
};
console.log("data:: ", data);
export const cardTitleData = [
  {
    description: "PHCSLogo",
    image: PHCSLogo,
    imgAlt: "PHCSLogo",
    title: "PHCSLogo",
    onClick: (e: SyntheticEvent, data: unknown) => console.log(e, data),
    list: [
      {
        label: "",
        labelRight: "",
        description: "Description 1Description 2Description 3Description",
      },
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
    ],
  },
  {
    description: "PHCSLogo",
    image: PHCSLogo,
    imgAlt: "PHCSLogo",
    title: "PHCSLogo",
    onClick: (e: SyntheticEvent, data: unknown) => console.log(e, data),
    list: [
      {
        label: "",
        labelRight: "",
        description: "Description",
      },
    ],
  },
];

export const bannerProps = {
  logo: {
    alt: "company brand",
    src: "https://dev.member.netwell.com/static/media/netwell-logo.62fcf0ab.png",
    style: {
      margin: 30,
      width: 100,
    },
  },
  banner: {
    alt: "company brand",
    src: "https://dev.member.netwell.com/static/media/welcome_image_netwell.8cb7d93a.png",
    style: {
      objectFit: "cover",
      objectPosition: "top",
      height: 250,
      boxShadow: "0px 5px 7px #ccc",
    },
  },
};

export const updatesData = [
  {
    description: "Your documents method has been changed.",
  },
  {
    description: "Your documents method has been changed.",
  },
  {
    description: "Your documents method has been changed.",
  },
  {
    description: "Your documents method has been changed.",
  },
  {
    image:
      "https://dev.member.universalhealthfellowship.org/static/media/notification_notice_icon.890b128b.svg",
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
  {
    image:
      "https://dev.member.universalhealthfellowship.org/static/media/notification_notice_icon.890b128b.svg",
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
  {
    image:
      "https://dev.member.universalhealthfellowship.org/static/media/notification_notice_icon.890b128b.svg",
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
  {
    image:
      "https://dev.member.universalhealthfellowship.org/static/media/notification_notice_icon.890b128b.svg",
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
  {
    image:
      "https://dev.member.universalhealthfellowship.org/static/media/notification_notice_icon.890b128b.svg",
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
  {
    label: "Reminder",
    labelRight: "12:44 PM",
    description: "Your documents method has been changed.",
  },
];

export const footerProps = {
  label: "abc",
  style: {
    fontSize: "11px",
    backgroundColor: "rgb(227, 227, 227)",
    color: "rgb(126, 126, 126)",
  },
  // leftSectionText:"Copyright © 2022 netWell. All rights reserved. | Powered by CarynHealth.com Version 1.1.0"
  // leftSectionStyle:{{ fontSize: "11px" }}
  middleSectionText:
    "Copyright © 2022 netWell. All rights reserved. | Powered by CarynHealth.com",
  rightSectionText: "Version 1.1.0",
  rightSectionIconList: [
    {
      image: require("./library/assests/images/linkedinBlack.svg").default,
      alt: "Link image",
      link: "https://www.linkedin.com/company/netwell?original_referer=https%3A%2F%2Fwww.google.com%2F",
    },
    {
      image: require("./library/assests/images/facebookBlack.svg").default,
      alt: "facebook.png",
      link: "https://www.facebook.com/mynetwell",
    },
    {
      image: require("./library/assests/images/instagramBlack.svg").default,
      alt: "instagram.png",
      link: "https://www.instagram.com/mynetwell/",
    },
    {
      image: require("./library/assests/images/youtubeBlack.svg").default,
      alt: "youtube.svg",
      link: "https://www.youtube.com/channel/UCRok91gnhqFQMUt9ATnjf3A",
    },
  ],

  bottomNavgation: {
    bottomNavCallBack: (data: any) => {
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
  },
};
