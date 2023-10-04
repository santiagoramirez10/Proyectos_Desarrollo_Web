import React from "react";
import { Link } from "react-router-dom";

const CauseItem = ({ link, imgURL, title, content }) => {
  return (
    <div class="col-sm-12 col-md-6 col-lg-4">
      <div class="causes-wrap">
        <div class="img-wrap">
          <Link to={"/" + link}>
            <img src={imgURL} alt="/" />
          </Link>
        </div>

        <div class="content-wrap">
          <h3>
            <Link to={"/" + link}>{title}</Link>
          </h3>
          <p>{content.substring(0,150)}...</p>
          <div class="btn-wrap">
            <Link
              to={"/donate"}
              class="btn-primary btn"
              href="causes-list.html"
            >
              Donar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseItem;
