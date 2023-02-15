import React, { SyntheticEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import CustomListWrapper from "./styleWrapper";
import PrimaryText from "./PrimaryText";

export interface ListProps {
  label?: string;
  labelRight?: string;
  description?: string;
  image?: string;
}

export interface InteractiveListProps {
  list: ListProps[];
  onClick?: (event: SyntheticEvent, data: ListProps) => void;
}

export const InteractiveList: React.FunctionComponent<InteractiveListProps> = (
  props
) => {
  return (
    <CustomListWrapper
      className={`list-wrapper ${!props?.onClick ? "pointer-events-none" : ""}`}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <List disablePadding>
            {props.list?.map((data: ListProps, index) => {
              return (
                <div key={`${data.label}-${index}`}>
                  <ListItem
                    className={props?.onClick ? "cursor-hand-hover" : ""}
                    disableGutters
                    onClick={(event) => props?.onClick?.(event, data)}
                  >
                    {data.image ? (
                      <ListItemIcon className="list-item-img">
                        <img src={data.image} alt={`${data.label}`} />
                      </ListItemIcon>
                    ) : null}
                    <ListItemText
                      primary={<PrimaryText {...data} />}
                      secondary={
                        <span
                          title={data?.description}
                          className={data.label ? "" : "only-description"}
                        >
                          {data?.description}
                        </span>
                      }
                    />
                  </ListItem>
                  {!data.label || index === props.list.length - 1 ? null : (
                    <Divider />
                  )}
                </div>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </CustomListWrapper>
  );
};
