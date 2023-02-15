import * as React from "react";
import styled from "@mui/system/styled";
import {
  AppBar,
  Box,
  Popper,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
export interface HeaderTabProps {
  style?: object;
  data: {
    text: string;
    style?: object;
    Component?: React.ReactNode;
    PopupComponent?: React.FC | any;
  }[];
  selectedTab?: number | 0;
  callBack: (data: any) => void;
}

export interface dataObject {
  text: string;
  style?: object;
  Component?: React.ReactNode;
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: boolean;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={!value}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
      {...other}
    >
      {value && (
        <Box sx={{ p: 3, backgroundColor: "#fff", height: "100vh" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const HeaderTabWapper = styled("div")(({ theme }) => {
  return {
    position: "fixed",
    width: "100%",
    zIndex: 1,
    ".css-7e0s21-MuiPaper-root-MuiAppBar-root": {
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    },
  };
});
const PopupWrapper = styled("div")(({ theme }) => {
  const PopupImg = require("../../assests/images/popup_mobile.svg").default;
  return {
    ".popupDiv": {
      backgroundImage: `url(${PopupImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      height: "20vw",
      width: "40vw",
      WebkitFilter: "drop-shadow(0 5px 5px rgba(0,0,0,.5))",
      zIndex: 1,
      padding: "2em",
    },
    [theme.breakpoints.down(600)]: {
      marginRight: "11vw",
      ".popupDiv": {
        width: "65vw",
        height: "34vw",
      },
    },
    [theme.breakpoints.up(1024)]: {
      ".popupDiv": {
        display: "none",
      },
    },
  };
});

export const HeaderTabsComponent: React.FunctionComponent<HeaderTabProps> = (
  props: HeaderTabProps
) => {
  const { ...rest } = props;
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(props.selectedTab || 0);
  const [isTrue, setIsTrue] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  let [index, setIndex] = React.useState(0);
  const divRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    for (const [index, obj] of props.data.entries()) {
      if ("PopupComponent" in obj) {
        setAnchorEl(divRef.current);
        setOpen(true);
        setIndex(index);
      }
    }
  }, [divRef]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props?.callBack(props.data[newValue].text);
    props?.data[newValue]?.Component ? setIsTrue(true) : setIsTrue(false);
  };
  const handleClickPopup = (event: any) => {
    console.log(event);
    setOpen(false);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const { PopupComponent } = props?.data[index];

  return (
    <>
      <HeaderTabWapper {...rest}>
        {showText && (
          <Box sx={{ width: "100%" }}>
            <Box>
              <AppBar position="sticky" className="tabheader">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant={props.data.length > 3 ? "scrollable" : "fullWidth"}
                  scrollButtons={false}
                >
                  {props.data?.map((label: dataObject, index: number) => (
                    <Tab
                      key={index}
                      ref={divRef}
                      sx={{ backgroundColor: "#fff" }}
                      label={label.text}
                    />
                  ))}
                </Tabs>
              </AppBar>
            </Box>
            <TabPanel value={isTrue}>{props.data[value].Component}</TabPanel>
          </Box>
        )}
      </HeaderTabWapper>
      {PopupComponent && (
        <Popper
          hidden={!showText}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
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
