import React, { useCallback, useState } from "react";
import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ChangeProgram } from "./ChangeProgram";
import { Button, CustomButtonProps } from "../../Button";

interface ProgramName {
  title: string;
  subTitle: string;
}

interface HeaderSumary {
  title: string;
  subTitle?: string;
  progress: number;
  met: number;
  remaining: number;
}

interface ShareSummary {
  title: string;
  subTitle: string;
  progress: number;
  met: number;
  remaining: number;
}

export interface SummaryProps {
  programName: ProgramName;
  headerSumary?: HeaderSumary;
  shareSummary?: ShareSummary;
  changeProgram: { [key: string]: string } | null;
}

const SummaryStyle = styled(Grid)(({ theme }) => {
  const roboto = {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  };

  return {
    ".pi-summary_title": {
      fontSize: 40,
      fontWeight: "700",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.1,
      letterSpacing: "normal",
      textAlign: "left",
      color: "#000",
      margin: 0,
    },
    ".pi-summary_subtitle": {
      fontSize: 30,
      color: "#666",
      fontWeight: 200,
      marginBottom: 26,
    },
    ".pi-progress": {
      ".pi-progress_title": {
        ...roboto,
        textAlign: "left",
        color: "#000",
        margin: "0 0 20px",
      },
      ".pi-progress_subtitle": {
        ...roboto,
        fontSize: 15,
        fontWeight: 400,
        letterSpacing: 1.2,
        textAlign: "left",
        color: "#454d58",
        marginBottom: 15,
      },
      ".pi-progress_container": {
        height: 16,
        width: "100%",
        background: "rgba(235,87,87,.5)",
        borderRadius: 50,
        ".pi-progress_inidicator": {
          backgroundColor: "#eb5757",
          height: "100%",
          borderRadius: 50,
          textAlign: "right",
          ".MuiSvgIcon-root": {
            fill: "currentColor",
            width: "1em",
            height: "1em",
            display: "inline-block",
            transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            flexShrink: 0,
            userSelect: "none",
            marginTop: 2,
          },
        },
      },
      ".pi-progress_amount-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
        ".pi-progress_met": {
          ...roboto,
          textAlign: "center",
          color: "#eb5757",
        },
        ".pi-progress_reamaining": {
          fontSize: 14,
          fontWeight: 400,
          textAlign: "center",
          color: "#000",
        },
      },
    },
    ".change-program button": {
      fontSize: 16,
    },
  };
});

// pi-> program information

export const Summary: React.FC<SummaryProps> = (props) => {
  const [changeProgram, setChangeProgram] = useState<string>("");

  const updateChangePrgm = useCallback(
    (btn: CustomButtonProps) => {
      return () => {
        console.log("updateChangePrgm INDEX: ", btn);
        setChangeProgram(btn.label);
      };
    },
    [changeProgram]
  );

  return (
    <SummaryStyle container className="pi-summary">
      <PITitle {...props.programName} />
      <Grid item xs={12} sm={4}>
        {/* Header Summary */}
        {props.headerSumary && <PIProgressBar {...props.headerSumary} />}
        {/* Share Summary */}
        {props.shareSummary && <PIProgressBar {...props.shareSummary} />}
        {/* Change Program Modal */}
        {!props.changeProgram ? null : (
          <ChangeProgram
            modal={changeProgram}
            setChangeProgram={(data: string) => setChangeProgram(data)}
            changeProgram={props.changeProgram}
          />
        )}
      </Grid>
      {/* Change Program Button */}
      {!props.changeProgram ? null : (
        <Grid item xs={12} className="change-program">
          <Button
            {...changePrgrmBtn}
            onClick={updateChangePrgm(changePrgrmBtn)}
          />
        </Grid>
      )}
    </SummaryStyle>
  );
};

const PITitle: React.FC<ProgramName> = (props) => (
  <Grid item xs={12} sm={4}>
    <h1 className="pi-summary_title">{props.title}</h1>
    {props.subTitle ? (
      <h2 className="pi-summary_subtitle pi-summary_title">{props.subTitle}</h2>
    ) : null}
  </Grid>
);

const PIProgressBar: React.FC<HeaderSumary> = (props) => {
  if (!Object.keys(props).length) return null;

  return (
    <div className="pi-progress">
      <h5 className="pi-progress_title">{props.title}</h5>
      <h6 className="pi-progress_subtitle">{props.subTitle}</h6>
      <div className="pi-progress_container">
        <div
          className="pi-progress_inidicator"
          style={{ width: props.progress + "%" }}
        >
          <ArrowRightAltIcon viewBox="0 6 24 24" style={{ color: "#ffffff" }} />
        </div>
      </div>

      <div className="pi-progress_amount-wrapper">
        <span className="pi-progress_met">
          ${numberWithCommas(props.met)} met
        </span>
        <span className="pi-progress_reamaining">
          ${numberWithCommas(props.remaining)} remaining
        </span>
      </div>
    </div>
  );
};

const numberWithCommas = (data: number) => {
  return new Intl.NumberFormat("en-us").format(data || 0);
};

const changePrgrmBtn = {
  variant: "outlined",
  label: "Change Program",
  size: "medium",
} as CustomButtonProps;
