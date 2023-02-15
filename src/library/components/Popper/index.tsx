import * as React from "react";
import { Badge, Button, styled, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

export interface popperObject {
  title: string;
  message: string;
  type: string;
  image: string;
  date: string;
}

export interface IconInfoObject {
  image: string;
  alt: string;
  Component?: React.FC;
  badge?: number;
}

export interface PopperProps {
  list: IconInfoObject[];
  callback: (data: any) => void;
}

const PopperWapper = styled("div")(({ theme }) => {
  return {
    ".header_right-section_icon": {
      borderRadius: 90,
      padding: 15,
    },
    [theme.breakpoints.down(475)]: {
      ".header-right_icons": {
        ".header_right-section_icon": {
          minWidth: "50px !important",
        },
      },
    },
    [theme.breakpoints.down(375)]: {
      ".header-right_icons": {
        display: "flex",
        width: 100,
        overflow: "auto",
        ".header_right-section_icon": {
          minWidth: "50px !important",
        },
      },
      ".MuiPaper-root": {
        background: "red",
      },
    },
  };
});

export const PopperComponent: React.FunctionComponent<PopperProps> = (
  props: PopperProps | any
) => {
  const { ...rest } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [iconIndex, setIconIndex] = React.useState<number | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleClick =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      if (iconIndex === index) {
        setIconIndex(null);
        return setOpen(false);
      }
      setAnchorEl(event.currentTarget);
      setOpen(false);
      if (iconIndex !== null && !props.list[iconIndex]?.Component) {
        setIconIndex(index);
        return props.callback(props.list[iconIndex]);
      }

      setOpen(true);
      setIconIndex(index);
    };

  const { Component } = (iconIndex !== null && props.list[iconIndex]) || {};
  return (
    <PopperWapper {...rest}>
      <Box className="header-right_icons">
        <Popper
          open={open}
          sx={{
            zIndex: 2,
            maxWidth: "80vw",
            maxHeight: "100vh",
          }}
          anchorEl={anchorEl}
          placement={"bottom-end"}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                sx={isSmallScreen ? { width: "100%", overflow: "scroll" } : {}}
                className="paper_wrapper"
              >
                {Component && <Component />}
              </Paper>
            </Fade>
          )}
        </Popper>
        <>
          {props.list.map((iconInfo: IconInfoObject, index: number) => {
            return (
              <Button
                className="header_right-section_icon"
                onClick={handleClick(index)}
                key={`btn${iconInfo?.alt}`}
              >
                <Badge badgeContent={iconInfo?.badge} color="primary">
                  <>
                    <img
                      alt={iconInfo?.alt}
                      src={iconInfo?.image}
                      className="header_right-icon"
                    />
                  </>
                </Badge>
              </Button>
            );
          })}
        </>
      </Box>
    </PopperWapper>
  );
};
