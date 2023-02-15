import * as React from "react";
import {
  Box,
  Drawer,
  List,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export interface RightDrawerProps {
  data?: React.ReactNode;
  hideSideBar: () => void;
  TopHeight: number;
}

const RightDrawerWapper = styled("div")(({ theme }) => {
  return {};
});

export const RightDrawerComponent: React.FunctionComponent<RightDrawerProps> = (
  props: RightDrawerProps | any
) => {
  const { data, ...rest } = props;
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <RightDrawerWapper {...rest}>
      <Drawer
        anchor={"right"}
        open={true}
        onClose={props.hideSideBar}
        style={
          showText
            ? {
                zIndex: 2,
              }
            : {}
        }
      >
        <Box sx={{ maxWidth: "100vw",width:'26.4vw' }}>
          <List style={showText ? { marginTop: props.TopHeight } : {}}>
            {props.data}
          </List>
        </Box>
      </Drawer>
    </RightDrawerWapper>
  );
};
