import React, { useCallback, useEffect, useState } from "react";
import { Dialog } from "../../Dialog";
import { CustomButtonProps } from "../../Button/index";
import { caseCreation } from "./api";

interface ChangeProgramType {
  modal: "Change Program" | "cancel" | "proceed" | string;
  setChangeProgram: (data: string) => void;
  changeProgram: { [key: string]: string };
}

export const ChangeProgram: React.FC<ChangeProgramType> = (props) => {
  const [open, setOpen] = useState(props.modal);

  useEffect(() => {
    setOpen(props.modal);
  }, [props.modal]);

  const Content = useCallback(
    () => <p>{dialogText[open as keyof typeof dialogText]}</p>,
    [open]
  );

  const proceedPrgrm = useCallback(async () => {
    try {
      const { url: URL, ...request } = props.changeProgram;
      await caseCreation({
        URL,
        data: request,
      });
      setOpen("Proceed");
    } catch (error) {
      setOpen("");
      return props.setChangeProgram("");
    }
  }, []);

  const updateChangePrgm = useCallback((btn: CustomButtonProps) => {
    if (btn.label === "Cancel") {
      return setOpen(btn.label);
    } else if (btn.label === "Ok") {
      setOpen("");
      return props.setChangeProgram("");
    } else if (btn.label === "Proceed") {
      return proceedPrgrm();
    } else {
      setOpen("");
      return props.setChangeProgram("");
    }
  }, []);

  if (!open) return null;

  return (
    <Dialog
      key={open}
      body={Content}
      title="Message"
      show={Boolean(open)}
      handleCallback={updateChangePrgm}
      buttons={dialogButtons[open as keyof typeof dialogButtons]}
    />
  );
};

const dialogText: { [key: string]: string } = {
  "Change Program":
    "You can submit a request to change your membership program. Our Member Services team will get in touch with you at the earliest and guide you through the process.",
  Cancel:
    "We could not process your request. Please contact our Member Services team at 1 (888) 366 6243 ,Monday through Friday 7:00am to 6:00 pm CST or email at customerservice@universalhealthfellowship.org",
  Proceed: "Your request has been submitted.", // click -> proceed -> sucess -> show this message
};

const dialogButtons = {
  "Change Program": [
    {
      variant: "contained",
      label: "Proceed",
      size: "medium",
    },
    {
      variant: "contained",
      label: "Cancel",
      size: "medium",
    },
  ] as CustomButtonProps[],
  Cancel: [
    {
      variant: "contained",
      label: "Ok",
      size: "medium",
    },
  ] as CustomButtonProps[],
  Proceed: [
    {
      variant: "contained",
      label: "Ok",
      size: "medium",
    },
  ] as CustomButtonProps[],
};
