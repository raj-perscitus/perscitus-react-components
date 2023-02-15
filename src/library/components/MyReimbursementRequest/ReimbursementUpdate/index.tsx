import React from "react";
import Grid from "@mui/material/Grid";
import { RightSideContent } from "./rightSideText";
import styled from "@mui/material/styles/styled";
import { SelectMember } from "./components/SelectMember";
import { CheckList } from "./components/CheckList";

const StyleWrapper = styled("section")(() => {
  return {};
});

export const ReimbursementUpdate = (props: { selectedMember: any }) => {
  return (
    <StyleWrapper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <Grid id="select-fields">
                
        <Grid item xs={3}>
            <SelectMember list={[]} value=""  />
        </Grid>
        <Grid item xs={6}></Grid>
                <CheckList />
            </Grid>
        </Grid>

        <Grid item xs={4}>
          <RightSideContent />
        </Grid>
      </Grid>
    </StyleWrapper>
  );
};
