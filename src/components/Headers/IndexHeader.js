/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(MR-16.jpeg)",
          }}
          ref={pageHeader}
        ></div>
        <Container className="vh-100">
          <div className="content-center brand">
            <h1 className="h1-seo">Matthew & Rebekah</h1>
            <h3>{props.date}</h3>
            {props.countdown}
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
