import React from "react";
import styled from "@mui/material/styles/styled";

const StyleWrapper = styled("div")(() => {
  return {
    ".textRed": {
      color: "rgba(250,84,66,.8392156862745098)"
    },
    ".upperText": {
        fontSize: ".9vw",
        fontWeight: 640,
        margin: "10px auto",
        textAlign: "justify"
    }
  }
});

export const RightSideContent = () => {
  return (
    <StyleWrapper className="upperText">
      <p>
        Reimbursements are requested when a member pays for their visit at time
        of service, out of their own pocket, which may occur if a Provider is
        not in the PHCS/Multiplan network or does not recognize a Health Sharing
        Organization. This form can be used for provider services at either a 
        <strong>PCP, Specialist, Urgent Care,</strong>
        or <>Emergency Room</>.
      </p>

      <p className="middleText">
        Visits <span className="textRed">must</span> be an eligible expense for
        sharing, per netWell Program Guidelines. If service requires a pre-
        authorization (See member guide), a pre-authorization request must be
        initiated by the provider, prior to date of service. Services paid for
        by member (which are eligible for sharing in accordance with Member
        Guidelines, will be eligible for reimbursement.
      </p>

      <p className="textRed">
        Members have 90 days from the date of services to submit complete
        information for a reimbursement request.
      </p>

      <p>
        Please refer to the below checklist for information that
        <span className="textRed"> must</span> be received for processing. Any
        delay in the information provided, such as inaccurate information, or
        missing information, member has thirty (30) days, from date of receipt
        to obtain required documentation for processing. Any information
        received after that date, will be denied for timely processing.
      </p>
    </StyleWrapper>
  );
};
