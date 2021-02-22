import React from "react";
import Link from "next/link";

const IndexPage = ({results}) => {

  return (
    <React.Fragment>
      <div className="background">
        <Link href="items/?search=ofertas">
          <a>
            <img src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-7e0f25a5-df8d-4bc2-9215-0aa331f1d097.jpg"/>
          </a>
        </Link>
      </div>
    </React.Fragment>
  );
  }

export default IndexPage;