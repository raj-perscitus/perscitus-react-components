import React, { useEffect, useState } from "react";
import { getEmployeeId, getMyneedsEOSForNetwell } from "./handlers";

export const MyShareRequests = ({ appConfig, mode }: any) => {
  const [response, setResponse] = useState<{ data: any; error: any }>({
    data: [],
    error: {},
  });

  const fetchData = async () => {
    try {
      await getEmployeeId({ appConfig, mode });
      const data = await getMyneedsEOSForNetwell({ appConfig, mode });
      setResponse({ data, error: null });
    } catch (error) {
      setResponse({
        data: null,
        error: {
          notfoundmsg1: "No share requests have been entered into the system.",
          notfoundmsg2:
            "Submitted needs may take 2-3 days to be displayed here.",
          notfoundmsg3: "For any clarifications call Customer Service.",
        },
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (response?.error)
    return (
      <section>
        <h5 className="noneeds_msg_display">{response.error.notfoundmsg1}</h5>
        <h5 className="noneeds_msg_display">{response.error.notfoundmsg2}</h5>
        <h5 className="noneeds_msg_display">{response.error.notfoundmsg3}</h5>
      </section>
    );
  if (!response.data?.length) {
    return (
      <section>
        <h5 className="noneeds_msg_display">
          No sharing request information available.
        </h5>
      </section>
    );
  }
  return <section id="my_share_requests"></section>;
};
