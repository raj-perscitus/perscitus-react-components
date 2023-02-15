import axios from "axios";
import config from "../../assests/config";

export const tableHeaders = {
  id: {
    value: "Reference #",
    minWidth: "",
  },
  serviceDate: {
    value: "Date Of Service",
    minWidth: "",
  },
  member: {
    value: "Member Name",
    minWidth: "",
  },
  provider: {
    value: "Provider",
    minWidth: "",
  },
  chargedAmount: {
    value: "Charged Amount",
    minWidth: "",
  },
  paidAmount: {
    value: "Paid Amount",
    minWidth: "",
  },
  createdDate: {
    value: "Submitted /Last Edit Date",
    minWidth: "",
  },
  status: {
    value: "Status",
    minWidth: "",
  },
  action: {
    value: "Action",
    minWidth: "",
  },
};

const formatDateMonth = new Intl.DateTimeFormat("en-US", { dateStyle: 'full' });

export const getReimbursementByMember = async () => {
  try {
    const { data: apiResponse } = await axios.get(
      config.API_URLS.NETWELL_MY_REIMBURSEMENT_DEV +
        "memberportal/getReimbursementByEmail/" +
        (localStorage.getItem("userMail") || "Dt@yopmail.com")
    );
    const keys = Object.keys(tableHeaders);
    let className = {};
    console.clear();
    console.log(apiResponse.response.map((data: any) => {
        return keys.reduce((acc: any, key: string) => {
            let modifiedData = data[key];
            if(key === "serviceDate") {
                modifiedData = formatDateMonth.format(new Date(modifiedData));
                const findIndex = modifiedData.indexOf(",");
                modifiedData = modifiedData.slice(findIndex + 2);
            } else if(key === "chargedAmount") {
                modifiedData = `$${modifiedData}`
            } else if(key === "paidAmount") {
                modifiedData = `$${modifiedData}`
            } else if(key === "createdDate") {
                modifiedData = formatDateMonth.format(new Date(modifiedData));
                const findIndex = modifiedData.indexOf(",");
                modifiedData = modifiedData.slice(findIndex + 2);
            } else if(key === "status") {
                modifiedData = modifiedData === "PENDING" ? "NOT YET SUBMITTED" : modifiedData;
                className = {
                    ...className,
                    [data.id + "status"]: modifiedData === "NOT YET SUBMITTED" ? "status-pending" : "status-submitted"
                }
            }
            return {
                ...acc,
                [key]: modifiedData || "NA",
                className
              }
        },{});
      }))
    return apiResponse.response.map((data: any) => {
        return keys.reduce((acc: any, key: string) => {
            let modifiedData = data[key];
            if(key === "serviceDate") {
                modifiedData = formatDateMonth.format(new Date(modifiedData));
                const findIndex = modifiedData.indexOf(",");
                modifiedData = modifiedData.slice(findIndex + 2);
            } else if(key === "chargedAmount") {
                modifiedData = modifiedData ? `$${modifiedData}` : ""
            } else if(key === "paidAmount") {
                modifiedData = modifiedData ? `$${modifiedData}` : ""
            } else if(key === "createdDate") {
                modifiedData = formatDateMonth.format(new Date(modifiedData));
                const findIndex = modifiedData.indexOf(",");
                modifiedData = modifiedData.slice(findIndex + 2);
            } else if(key === "status") {
                modifiedData = modifiedData === "PENDING" ? "NOT YET SUBMITTED" : modifiedData;
                className = {
                    ...className,
                    [data.id + "status"]: modifiedData === "NOT YET SUBMITTED" ? "status-pending" : "status-submitted"
                }
            }
            console.log("3modifiedData: ", className)
            return {
                ...acc,
                [key]: modifiedData || "NA",
                className
              }
        },{});
      });
  } catch (error) {
    return error;
  }
};
