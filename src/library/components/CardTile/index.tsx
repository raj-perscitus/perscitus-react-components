import React, { SyntheticEvent, useCallback, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardTileWrapper from "./CardTileWrapper";
import { InteractiveList, ListProps } from "../List";

export interface CardTileProps {
  title: string;
  image: string;
  onClick: (event: SyntheticEvent, data: CardTileProps | ListProps) => void;
  list: ListProps[];
}

export const CardTile: React.FunctionComponent<CardTileProps> = React.memo(
  (props) => {
    const { title, onClick, list, image } = props;

    const [isHoverOnTile, setHoverOnTile] = useState(false);

    const tileOnClickHandler = useCallback(
      (event: SyntheticEvent) => onClick(event, props),
      [onClick, props]
    );
    const tileMouseEnter = useCallback(
      () => list?.length && setHoverOnTile(true),
      [list]
    );
    const tileOnMouseOutHandler = useCallback(
      () => list?.length && setHoverOnTile(false),
      [list]
    );
    const listOnClickHandler = useCallback(
      (event: SyntheticEvent, data: ListProps) => {
        onClick(event, data);
      },
      [onClick]
    );

    return (
      <CardTileWrapper
        className={`${isHoverOnTile ? "hoverOnContentWrapper" : ""}`}
      >
        <CardContent
          onMouseLeave={tileOnMouseOutHandler}
          onClick={tileOnClickHandler}
          onMouseOver={tileMouseEnter}
        >
          <Box>
            <img src={image} alt={title} />
            <Typography className="cardTitle" variant="h6" align="center">
              {title}
            </Typography>
          </Box>
          {isHoverOnTile && (
            <InteractiveList list={list} onClick={listOnClickHandler} />
          )}
        </CardContent>
      </CardTileWrapper>
    );
  }
);
