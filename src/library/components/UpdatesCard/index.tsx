import React from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider, Link } from "@mui/material";

export interface UpdatesCardsProps {
  image?: string;
  title?: string;
  subheader?: string;
  Component?: React.ComponentType;
  loading?: boolean;
  errorMessage?: string;
  viewBtnDisplay?: boolean;
}

const CustomCard = styled(Card)(({ theme }) => {
  return {
    marginBottom: 10,
    maxWidth: 314,
    minWidth: 314,
    "& .MuiCardHeader-root": {
      padding: 10,
    },
    "& .MuiCardHeader-avatar": {
      marginRight: 5,
      img: {
        width: 30,
        height: 30,
      },
    },
    "& .MuiCardContent-root": {
      height: 266,
      maxHeight: 266,
      backgroundColor: "#fff",
      overflow: "auto",
      padding: 0,
      "& .card_progress": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        margin: "0px auto",
      },
      "& .card_errorMessage": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        margin: "0px auto",
        textAlign: "center",
        padding: "0 20px",
        fontSize:'14px'
      },
      "&::-webkit-scrollbar": {
        width: 9,
      },
      // "&::-webkit-scrollbar-track": {
      //   boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      // },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
      },
    },
    "& .MuiCardHeader-content": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      "& span": {
        marginLeft: "0.3vw",
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 0.15,
        color: "#162242",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },
    },
    "& .MuiCardHeader-action": {
      alignSelf: "auto",
      margin: 0,
      "& a": {
        fontSize: 12,
        color: "#8c827a",
        marginBottom: 5,
        fontWeight: 500,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1,
        letterSpacing: 0.15,
        fontFamily: "Roboto",
      },
    },
    [theme.breakpoints.down(770)]: {
      flexDirection: "column",
      maxWidth: "80%",
      minWidth: "80%",
      "& .MuiCardHeader-content": {
        "& span": {
          fontSize: "4.4vw",
        },
      },
    },
  };
});

export const UpdatesCard: React.FunctionComponent<UpdatesCardsProps> = (
  props: UpdatesCardsProps
) => {
  const { image, Component, loading = false, errorMessage = "" } = props;
  return (
    <CustomCard>
      <CardHeader
        avatar={<img src={image} alt={props.title} />}
        action={
          props.viewBtnDisplay && (
            <Link href="test" underline="none" onClick={console.log}>
              View all
            </Link>
          )
        }
        title={props.title}
        subheader={props.subheader}
      />
      <Divider />

      <CardContent>
        {loading && (
          <div className="card_progress">
            <CircularProgress size={30} color="info" />
          </div>
        )}
        {!loading && errorMessage && (
          <p className="card_errorMessage">{errorMessage}</p>
        )}
        {!loading && !errorMessage && Component && <Component />}
      </CardContent>
    </CustomCard>
  );
};
