import React from "react";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

export interface AddonsType extends ActiveType {
  title: string;
  active: boolean;
}

const StyleAddons = styled("div")(() => {
  return {
    ".addon-title": {
      fontFamily: "'Anton', sans-serif",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.1,
      letterSpacing: "normal",
      textAlign: "left",
      color: "#000",
      margin: "0",
      fontSize: 36,
      marginBottom: 15,
    },
    ".addon_status": {
      color: "#fff",
      width: 65,
      height: 16,
      fontFamily: "Roboto",
      fontSize: 12,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.33,
      letterSpacing: 0.4,
      textAlign: "left",
      padding: "5px 10px",
      borderRadius: 4,
    },
    ".addon_inactive": {
      backgroundColor: "#eb5757",
    },
    ".addon_active": {
      backgroundColor: "#27ae60",
    },
    ".addon_label": {
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      textAlign: "left",
      color: "#454d58",
      margin: "20px 0 0px 0",
    },
    ".addon_value": {
      marginTop: 0,
    },
  };
});

export const Addons: React.FC<AddonsType> = (props) => {
  return (
    <StyleAddons>
      <h1 className="addon-title">{props.title}</h1>
      {props.active ? (
        <Active
          membersRolled={props.membersRolled}
          effectiveDate={props.effectiveDate}
        />
      ) : (
        <Inactive />
      )}
    </StyleAddons>
  );
};

const MontlyFee = () => (
  <div>
    <p className="addon_label">Add-On Monthly Fee</p>
    <p className="addon_value">
      <b>$25</b> <span className="addon_label">(Family Total)</span>
    </p>
  </div>
);

const Inactive = () => {
  return (
    <>
      <span className="addon_status addon_inactive">Inactive</span>
      <MontlyFee />
    </>
  );
};

interface ActiveType {
  membersRolled?: Array<string>;
  effectiveDate?: Array<string>;
}

const Active: React.FC<ActiveType> = (props) => {
  return (
    <>
      <span className="addon_status addon_active">Active</span>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <p className="addon_label">Members Enrolled</p>
          {props.membersRolled?.map((data: string) => (
            <b>
              {data}
              <br />
            </b>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <p className="addon_label">Effective Date</p>
          {props.effectiveDate?.map((data: string) => (
            <b>
              {data}
              <br />
            </b>
          ))}
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
          <MontlyFee />
        </Grid>
      </Grid>
    </>
  );
};
