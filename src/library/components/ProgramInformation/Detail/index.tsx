import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "@mui/material/styles/styled";

export interface DetailType {
  title: string;
  subTitle?: string;
}

const DetailStyle = styled(ListItem)(() => {
  return {
    ".MuiListItemText-primary": {
      letterSpacing: 1.12,
      fontFamily: "Roboto",
      fontSize: 14,
    },
    ".MuiListItemText-secondary": {
      fontSize: 16,
      fontWeight: 700,
      color: "#000",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.1,
      letterSpacing: "normal",
    },
    ".MuiListItem-root:hover": {
      background: "#fff !important",
      color: "initial !important",
    },
  };
});

export const Detail: React.FC<{ list: DetailType[] }> = (props) => {
  return (
    <List>
      {props.list?.map((data) => (
        <DetailStyle key={data.title}>
          <ListItemText primary={data.title} secondary={data.subTitle || ""} />
        </DetailStyle>
      ))}
    </List>
  );
};
