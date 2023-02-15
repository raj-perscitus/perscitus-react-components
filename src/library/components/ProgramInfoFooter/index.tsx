import React from "react";
import { styled } from "@mui/system";
import { Button, CustomButtonProps } from "../Button";

export interface FooterProps {
  label: string;
  style?: object;
  leftSectionbuttons?: CustomButtonProps[] | any;
  leftSectionStyle?: object;
  rightSectionText?: string;
  rightSectionStyle?: object;
  handleCallback?: (data: any) => void;
}

const FooterWrapper = styled("div")(({ theme }) => {
  return {
    ".progInfoFooter": {
      background: "#f7f7f7",
      borderTop: "1px solid #bdbdbd",
      padding: "20px",
      boxShadow: "0 2px 4px 0 #e5e5e5, 0 1px 2px 0 #bdbdbd",
      borderRadius: "0 0 4px 4px",
    },
    ".footerText": {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "end",
      padding: "9px 15px 0 0",
    },
    ".leftSectionbuttons": {
      alignItems: "center",
      display: "flex",
    },
    p: {
      margin: 0,
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: 400,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.14,
      letterSpacing: "normal",
      textAlign: "right",
      color: "#333",
      padding: "2px 0",
    },
    ".dpFlex": {
      display: "flex",
    },
    [theme.breakpoints.down(475)]: {
      ".progInfoFooter": {
        display: "none",
      },
    },
  };
});

export const ProgramInfoFooter: React.FunctionComponent<FooterProps> = (
  props: FooterProps
) => {
  const { label, ...rest } = props;
  const handleClickEvents = (btn: CustomButtonProps) => {
    props.handleCallback && props.handleCallback({ ...btn });
  };

  return (
    <FooterWrapper {...rest}>
      <div className="progInfoFooter">
        <div className="row">
          <div className="col-md-12 dpFlex">
            <div className="leftSectionbuttons">
              {props?.leftSectionbuttons &&
                props?.leftSectionbuttons.map((btn: CustomButtonProps) => (
                  <Button key={btn.label} {...btn} onClick={() => handleClickEvents(btn)} />
                ))}
            </div>
            <div className="footerText">
              <div>
                <p style={{ fontWeight: "700" }}>Need help?</p>
                <p style={{ whiteSpace: "pre" }}>{props.rightSectionText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
