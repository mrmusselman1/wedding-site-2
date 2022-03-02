/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            {/* <ul>
              <li>
                Built with love by Matt and Bekah
              </li>
            </ul> */}
          </nav>
          <div className="copyright" id="copyright">
            {/* <a target="_blank" href="">React</a>,&nbsp;
            <a target="_blank" href="">TypeScript</a>,&nbsp;
            and&nbsp;
            <a target="_blank" href="https://demos.creative-tim.com/now-ui-kit-react/#/index">Now UI Kit</a>. */}
            Site built with love by Matt and Bekah
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
