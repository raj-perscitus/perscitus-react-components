import React from "react";
import { styled } from "@mui/system";
import { BottomNavigationComponent } from "../BottomNavigation";
import { useMediaQuery, useTheme } from "@mui/material";

export interface FooterProps {
  label: string;
  style?: object;
  leftSectionText?: string;
  leftSectionStyle?: object;
  middleSectionText?: string;
  middleSectionStyle?: object;
  rightSectionText?: string;
  rightSectionStyle?: object;
  rightSectionIconList?: { image: string; alt: string; link: string }[];
  bottomNavgation?: {
    bottomNavCallBack: (data: any) => void;
    bottomIconList: {
      label: string;
      icon: React.ReactNode;
      activeIcon: React.ReactNode;
    }[];
    styleBottomNav?: object;
    selectedIndex?: number;
  };
}

const FooterWrapper = styled("footer")(({ theme }) => {
  return {
    display: "flex",
    padding: "1vw 1vw",
    backgroundColor: "#ffffff",
    alignItems: "center",
    width: "100%",
    ".footer_left-section": {
      flex: 4,
      fontSize: ".7rem",
    },
    ".footer_middle-section": {
      flex: 6,
      fontSize: ".7rem",
    },
    ".footer_right-section": {
      flex: 3,
      fontSize: ".7rem",
      textAlign: "end",
      display: "flex",
      justifyContent: "end",
      marginRight: "10px",
      whiteSpace: "pre",
      ".footer_right-icon": {
        padding: "0px 10px",
        img: {
          width: 34,
        },
      },
    },

    // Responsive
    [theme.breakpoints.between(768, 320)]: {
      footer: {
        marginBottom: "25vh",
      },
    },

    [theme.breakpoints.down(900)]: {
      display: "inline-block",
      textAlign: "center",
      marginBottom: 56,
      ".footer_right-section": {
        textAlign: "center",
        display: "block",
        marginTop: "10px",
      },
    },
    [theme.breakpoints.down(770)]: {
      marginBottom: "10.5vh",
    },
  };
});

export const Footer: React.FunctionComponent<FooterProps> = (
  props: FooterProps
) => {
  const { label, ...rest } = props;
  const theme = useTheme();
  const showBottomNav = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <FooterWrapper {...rest}>
        <div className="footer_left-section" style={props.leftSectionStyle}>
          {props.leftSectionText}
        </div>
        <div className="footer_middle-section" style={props.middleSectionStyle}>
          {props.middleSectionText}
        </div>
        <div className="footer_right-section" style={props.rightSectionStyle}>
          {props?.rightSectionText ||
            props?.rightSectionIconList?.map((key) => {
              return (
                <a
                  key={key.alt}
                  className="footer_right-icon"
                  rel="noreferrer"
                  target="_blank"
                  href={key.link}
                >
                  <img alt={key.alt} src={key.image} />
                </a>
              );
            })}
        </div>
      </FooterWrapper>
      {showBottomNav && (
        <BottomNavigationComponent
          navigationlist={props?.bottomNavgation}
          style={props?.bottomNavgation?.styleBottomNav}
        />
      )}
    </>
  );
};
