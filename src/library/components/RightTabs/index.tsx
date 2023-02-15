import React from "react";
import { styled } from "@mui/system";
import { RightDrawerComponent } from "../RightDrawer";
import { Box, Popper, useMediaQuery, useTheme } from "@mui/material";
import PopupImg from "../../assests/images/popup.png";

export interface RightTabsProps {
  style?: object;
  data: {
    image: string;
    text: string;
    style:
      | {
          backgroundColor: string;
        }
      | object;
    Component?: React.ReactNode;
    PopupComponent?: React.FC | any;
  }[];
  callBack: (data: any) => void;
}

const RightTabWrapper = styled("div")(({ theme }) => {
  return {
    ".web_tooltiop_member_container": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: " flex-end",
      position: "absolute",
      width: "100%",
      height: "70vh",
      overflowY: "scroll",
      "-ms-overflow-style": "none",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
    ".web_tag_main_div": {
      position: "fixed",
      zIndex: 1,
    },
    ".web_tag": {
      boxShadow:
        "rgb(50 50 93 / 25%) 0px 0px 0px 0px inset, rgb(0 0 0 / 30%) 0px 22px 26px -15px inset",
      backgroundColor: "#ff5417",
      height: "13vw",
      width: "4vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "1.5vw 0",
      cursor: "pointer",
    },
    ".web_patch_icon": {
      objectFit: "contain",
      width: "1.76vw",
      marginBottom: "1em",
    },
    ".web_patch_text": {
      marginTop: " 1.2vw",
      width: "11vw",
      height: "2vw",
      transform: "rotate(-90deg)",
      fontSize: "1.3vw",
      fontWeight: 500,
      color: "#ffffff",
      fontFamily: "Roboto",
    },
    // Responsive
    [theme.breakpoints.down(1024)]: {
      ".web_tooltiop_member_container": {
        display: "none",
      },
    },
  };
});

const PopupWrapper = styled("div")(({ theme }) => {
  return {
    ".popupDiv": {
      backgroundImage: `url(${PopupImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "15vw",
      width: "22vw",
      WebkitFilter: "drop-shadow(0 5px 5px rgba(0,0,0,.5))",
      zIndex: 1,
      padding: "1em",
    },
    [theme.breakpoints.down(1024)]: {
      ".popupDiv": {
        display: "none",
      },
    },
  };
});

export const RightTabs: React.FunctionComponent<RightTabsProps> = (
  props: RightTabsProps
) => {
  const { ...rest } = props;
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.down("md"));
  const [component, setComponent] = React.useState(false);
  let [index, setIndex] = React.useState(0);
  const [Height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const div_ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    for (const [index, obj] of props.data.entries()) {
      if ("PopupComponent" in obj) {
        setAnchorEl(div_ref.current);
        setOpen(true);
        setIndex(index);
      }
    }
  }, [div_ref]);
  React.useLayoutEffect(() => {
    setHeight(ref?.current?.offsetTop as number);
  }, []);

  const handleClick = (index: number, ele: string) => {
    setIndex(index);
    let value = props.data.find(({ text }) => text === ele);
    !value?.Component ? props.callBack(ele) : setComponent(true);
  };
  const handleClickPopup = (event: any) => {
    console.log(event);
    setOpen(false);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const { PopupComponent } = props.data[index];
  return (
    <>
      <RightTabWrapper ref={ref} {...rest}>
        <div className="web_tooltiop_member_container" style={props.style}>
          <div className="web_tag_main_div">
            {props.data?.map((label, index) => {
              return (
                <div
                  className={"web_tag"}
                  key={index}
                  ref={label.PopupComponent ? div_ref : ref}
                  style={label.style}
                  onClick={(e) => handleClick(index, label.text)}
                >
                  <img src={label.image} className="web_patch_icon" />
                  <div className="web_patch_text" aria-valuetext={label.text}>
                    {label.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RightTabWrapper>
      {component && !showText && (
        <RightDrawerComponent
          TopHeight={Height}
          hideSideBar={() => setComponent(false)}
          data={props.data[index].Component}
        />
      )}

      {PopupComponent && (
        <Popper
          hidden={showText}
          open={open}
          anchorEl={anchorEl}
          placement="right-start"
        >
          <Box>
            <PopupWrapper>
              <div className="popupDiv">
                <PopupComponent close={handleClickPopup} />
              </div>
            </PopupWrapper>
          </Box>
        </Popper>
      )}
    </>
  );
};
