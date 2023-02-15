import React, { SyntheticEvent } from "react";
import styled from "@mui/system/styled";
import useTheme from "@mui/system/useTheme";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PopperComponent } from "../Popper";
import config from "../../assests/config";
import LogoImage from "../../assests/images/netwell-logo.png";

export interface HeaderProps {
  style?: object;
  middleSectionStyle?: object;
  rightSectionStyle?: object;
  rightSectionIconList: {
    rightCallBack: (data: any) => void;
    Iconlist: {
      image: string;
      alt: string;
      Component?: React.FC;
      badge?: number;
    }[];
  };
  sideBarData?: {
    sideBarCallBack?: (data: any) => void;
    selectedItem?: {
      selectedIndex?: number | 0;
      pageName?: string;
    };
    listOfSideBar: {
      text: string;
      icon: string;
      redirectUrl?: string;
    }[];
  };
  listOfSideBarStyle?:
    | {
        backgroundColor: string;
        color: string;
        listItemText?: { [key: string]: object };
        StyledList?: {
          // selected and (selected + hover) states
          "&& .Mui-selected, && .Mui-selected:hover":
            | {
                backgroundColor: String;
                "&, & .MuiListItemIcon-root"?: {
                  color: String;
                };
              }
            | Object;
          // hover states
          "& .MuiListItemButton-root:hover": {
            backgroundColor: String;
            "&, & .MuiListItemIcon-root"?: {
              color: String;
            };
          };
        };
      }
    | { [key: string]: any };
  user?: string;
  variant: "web" | "mobile";
  MobileViewComponant?: React.ComponentType<any>;
  logoImage?: string;
}

const HeaderWrapper = styled("header")(({ theme }) => {
  return {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    width: "100%",
    ".headerMain": {
      display: "flex",
      flex: 1,
      position: "sticky",
    },
    ".header_middle-section": {
      flex: 6,
      alignItems: "center",
      display: "flex",
      color: "#000",
      fontSize: 20,
      fontweight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.6,
      letterSpacing: 0.5,
      width: 108,
      img: {
        objectFit: "contain",
        height: 45,
      },
    },
    ".header_right-section": {
      flex: 3,
      textAlign: "end",
      display: "contents",
      justifyContent: "end",
      marginRight: 10,
      alignItems: "center",
      ".header_right-icon": {
        alignSelf: "center",
        width: 24,
      },
    },
    ".tabheader": {
      height: 48,
      boxShadow:
        "0px 1px 0px 0 rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 12%), 1px 4px 4px 0 rgb(0 0 0 / 14%)",
    },
    // Responsive
    [theme.breakpoints.down(768)]: {
      boxShadow:
        " 0 2px 4px 0 rgb(0 0 0 / 20%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 4px 5px 0 rgb(0 0 0 / 14%)",
      ".header_middle-page_name_text": {
        display: "block",
      },
      ".headerMain": {
        zIndex: 0,
      },
    },
  };
});

export const Header: React.FunctionComponent<HeaderProps> = (
  props: HeaderProps
) => {
  const { style, ...rest } = props;
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("md"));

  const [state, setState] = React.useState(false);
  const [pageName, setPageName] = React.useState(
    props.sideBarData?.selectedItem?.pageName
  );
  const [selectedIndex, setSelectedIndex] = React.useState(
    props.sideBarData?.selectedItem?.selectedIndex
  );
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    setHeaderHeight(ref?.current?.offsetHeight as number);
  }, []);

  const handleListItemClick = (index: number, value: string) => {
    setSelectedIndex(index);
    setPageName(value);
    props.sideBarData?.sideBarCallBack?.({ index });
    setState(false);
  };

  const handleRightClick = (event: SyntheticEvent) => {
    const icon = props.rightSectionIconList?.Iconlist?.find(
      ({ alt }) => alt === (event.target as HTMLImageElement).alt
    );
    !icon?.Component && props.rightSectionIconList?.rightCallBack({ icon });
  };

  return (
    <HeaderWrapper style={props.style} {...rest} ref={ref}>
      {props.variant === "web" ? (
        <>
          <div className={"headerMain"}>
            <IconButton onClick={() => setState(!state)}>
              <MenuIcon />
            </IconButton>
            <div
              className="header_middle-section"
              style={props.middleSectionStyle}
            >
              {showText ? (
                <img src={props?.logoImage || LogoImage} alt="icon" />
              ) : (
                <span className="header_middle-page_name_text">{pageName}</span>
              )}
            </div>
            <div
              className="header_right-section"
              onClick={handleRightClick}
              style={props.rightSectionStyle}
            >
              <PopperComponent
                list={props.rightSectionIconList?.Iconlist}
                callback={props.rightSectionIconList?.rightCallBack}
              />
            </div>
          </div>

          <Drawer
            anchor={"left"}
            open={state}
            onClose={() => setState(false)}
            PaperProps={{
              sx: props.listOfSideBarStyle,
            }}
            style={
              showText
                ? {
                    zIndex: 0,
                  }
                : {}
            }
          >
            <Box
              sx={{
                overflow: "hidden",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  width: 9,
                },
                // "&::-webkit-scrollbar-track": {
                //   boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
                // },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "darkgrey",
                },
              }}
            >
              <List
                sx={{ ...(props.listOfSideBarStyle?.StyledList || {}) }}
                style={showText ? { marginTop: headerHeight } : {}}
              >
                <ListItem
                  sx={{
                    maxWidth: "180px",
                  }}
                >
                  {!showText && (
                    <img
                      className="mob_view_logo_img"
                      src={props?.logoImage || LogoImage}
                      alt="icon"
                      width="100%"
                    />
                  )}
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{ minWidth: "32px" }}>
                    <AccountCircleIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={props.listOfSideBarStyle?.listItemText}
                    disableTypography
                    primary={config.text.HELLO + props.user}
                  />
                </ListItem>
                {props.sideBarData?.listOfSideBar?.map((key, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      selected={selectedIndex === index}
                      onClick={() => handleListItemClick(index, key.text)}
                    >
                      <ListItemIcon>
                        <img src={key.icon} width="22px" alt={key.text} />
                      </ListItemIcon>
                      <ListItemText
                        sx={props.listOfSideBarStyle?.listItemText}
                        disableTypography
                        primary={key.text}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
       <>{
        props.MobileViewComponant &&
        <props.MobileViewComponant/>
        }</>
      )}
    </HeaderWrapper>
  );
};
