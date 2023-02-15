import * as React from "react";
import DialogMui from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, CustomButtonProps } from "../Button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DialogType {
  show: boolean;
  title?: string;
  body: React.ComponentType;
  buttons: CustomButtonProps[];
  handleCallback: (data: any) => void;
  CloseIcon?: boolean;
  titleBackgroundColor?: object;
}

const CloseIconObj = {
  label: "Close",
  type: "button",
};

export const Dialog = (props: DialogType) => {
  const [open, setOpen] = React.useState(props.show);

  React.useEffect(() => {}, [props.show]);

  if (!open) return null;

  const handleClickEvents = (btn: CustomButtonProps) => {
    setOpen(false);
    props.handleCallback({ ...btn });
  };

  const { title, buttons } = props;

  return (
    <div>
      <DialogMui
        open={open}
        onClose={handleClickEvents}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {title && (
          <DialogTitle
            sx={{
              ...props.titleBackgroundColor,
              fontSize: props.CloseIcon ? "1.5rem" : "16px",
              color: "#000",
              fontWeight: "400",
            }}
            id="alert-dialog-title"
          >
            {title}
            {open && props.CloseIcon ? (
              <IconButton
                aria-label="close"
                onClick={() => handleClickEvents(CloseIconObj)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            ) : null}
          </DialogTitle>
        )}
        <DialogContent dividers={props.CloseIcon}>
          <props.body />
        </DialogContent>
        <DialogActions>
          {buttons.map((btn: CustomButtonProps) => (
            <Button key={btn.label} {...btn} onClick={() => handleClickEvents(btn)} />
          ))}
        </DialogActions>
      </DialogMui>
    </div>
  );
};
