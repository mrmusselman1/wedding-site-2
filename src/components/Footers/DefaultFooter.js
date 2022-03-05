/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import preval from 'preval.macro';

// core components

function DefaultFooter() {
  const lastUpdated = preval`module.exports = new Date().toLocaleString();`;

  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="row">
            <nav className="col-sm-12 col-md-6 p small">
              <ul>
                <li>
                  Last Updated {lastUpdated}
                </li>
              </ul>
            </nav>
            <div className="copyright col-sm-12 col-md-6 p small" id="copyright">
              {/* <a target="_blank" href="">React</a>,&nbsp;
              <a target="_blank" href="">TypeScript</a>,&nbsp;
              and&nbsp;
              <a target="_blank" href="https://demos.creative-tim.com/now-ui-kit-react/#/index">Now UI Kit</a>. */}
              Site built with love by Matt and Bekah
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
