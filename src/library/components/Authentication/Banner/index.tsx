import React from "react";
import { styled } from "@mui/system";

const StyledWrapper = styled("section")(({ theme }) => {
  return {
    "> img": {
      display: "block",
      width: "100%",
      objectFit: "contain",
    },
    ".banner_brand-logo": {
      width: 180,
    },
  };
});

interface ImgType {
  src: string;
  alt: string;
  style: object;
}

export interface BannerTypes {
  logo: ImgType;
  banner: ImgType;
}

const BannerComponent: React.FC<BannerTypes> = (props) => {
  return (
    <StyledWrapper id="banner">
      {[
        { className: "brand-logo", ...props.logo },
        { className: "hero-banner", ...props.banner },
      ].map((img) => (
        <img
          {...img}
          className={`banner_${img.className}`}
          alt={img.alt}
          key={img.src}
          loading="eager"
        />
      ))}
    </StyledWrapper>
  );
};

export const Banner = React.memo(BannerComponent);
