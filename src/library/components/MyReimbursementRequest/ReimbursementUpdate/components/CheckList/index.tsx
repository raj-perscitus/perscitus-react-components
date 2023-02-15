import React, { useMemo, useState, useCallback } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { defaultState, list } from "./data";

const checkBoxStyle = {
  color: "#533278",
};

export const CheckList = () => {
  const [listState, setListState] = useState<any>(defaultState());

  const onChangeHandler = useCallback((selected: any) => {
    return () => {
      setListState((prevState: any) => {
        return { ...prevState, [selected.id]: !selected.checked };
      });
    };
  }, []);

  const checkListDetails = useMemo(() => {
    return list.map((detail) => ({ ...detail, checked: listState[detail.id] }));
  }, [listState]);

  return (
    <section>
      <h5>Click each checklist item to fill in the required information.</h5>
      <FormGroup>
        {checkListDetails.map((detail) => {
          return (
            <FormControlLabel
              onChange={onChangeHandler(detail)}
              control={<Checkbox defaultChecked style={checkBoxStyle} />}
              {...detail}
            />
          );
        })}
      </FormGroup>
    </section>
  );
};
