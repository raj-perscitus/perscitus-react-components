import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material";

interface LoaderType {
  message?: string;
}

const LoaderWrapper = styled("div")(() => {
  return {
    background: "rgba(0,0,0,0.5) !important",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 999,
    top: 0,
    span: {
      position: "fixed",
      top: "50%",
      left: "50%",
    },
  };
});

const useLoaderHandlers = () => {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");

  const setLoading = (config?: LoaderType) => {
    console.log(":::setLoading Working:::");
    config?.message && setMessage(message);
    setLoader(true);
  };

  const unSetLoading = () => {
    console.log(":::unSetLoading Working:::");
    message && setMessage("");
    setLoader(false);
  };

  return {
    loader,
    message,
    setLoading,
    unSetLoading,
  };
};

let actions = {
  setLoading: (data?: LoaderType) => {
    console.log("Oh! setLoading not works");
  },
  unSetLoading: () => {
    console.log("Oh! unSetLoading not works");
  },
};

export const useCommonLoader = () => actions;

export const Loader: React.FunctionComponent = () => {
  const { loader, message, setLoading, unSetLoading } = useLoaderHandlers();

  useEffect(() => {
    actions = {
      setLoading,
      unSetLoading,
    };
  });

  return (
    <LoaderWrapper
      style={{ display: loader ? "block" : "none" }}
      className="common_loader"
    >
      <CircularProgress color="primary" />
      {message ? <p>{message}</p> : null}
    </LoaderWrapper>
  );
};
