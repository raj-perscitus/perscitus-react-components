import React from "react";
import { CircularProgress } from "@mui/material";

export const ApiLoader: React.FunctionComponent = () => {
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 99999,
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#8e89a73d",
            }}
        >
            <CircularProgress />
        </div>
    );
};
