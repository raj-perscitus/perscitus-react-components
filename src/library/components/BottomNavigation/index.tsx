import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export interface BottomNavProps {
  navigationlist?: object | any;
  style?: object;
}

export interface bottomIconList {
  label: string;
  icon: string;
  activeIcon: string;
}

const bottomNavStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: "space-evenly",
  zIndex: 1,
};

const FooterWrapper = styled("div")(({ theme }) => {
  return {
    svg: {
      maxWidth: 50,
      maxHeight: 50,
      padding: 4,
    },
  };
});
export const BottomNavigationComponent: React.FunctionComponent<
  BottomNavProps
> = (props: BottomNavProps) => {
  const { ...rest } = props;
  const [value, setValue] = React.useState(
    props?.navigationlist?.selectedIndex || 0
  );
  return (
    <FooterWrapper {...rest}>
      <Box>
        <Paper elevation={5}>
          <BottomNavigation
            showLabels
            value={value}
            sx={{ ...bottomNavStyle, ...props.style }}
            onChange={(event, newValue) => {
              setValue(newValue);
              props.navigationlist?.bottomNavCallBack(newValue);
            }}
          >
            {props.navigationlist?.bottomIconList.map(
              (itemList: bottomIconList, index: number) => {
                return (
                  <BottomNavigationAction
                    key={index}
                    label={itemList?.label}
                    icon={
                      value === index ? itemList?.activeIcon : itemList?.icon
                    }
                    sx={{ ...props.style }}
                  />
                );
              }
            )}
          </BottomNavigation>
        </Paper>
      </Box>
    </FooterWrapper>
  );
};
