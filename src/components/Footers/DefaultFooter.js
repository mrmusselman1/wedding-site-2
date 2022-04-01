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
                <li title="Time is America/New_York">
                  Last Updated {lastUpdated}
                </li>
              </ul>
            </nav>
            <div className="copyright col-sm-12 col-md-6 p small" id="copyright">
              {/* <a target="_blank" href="">React</a>,&nbsp;
              <a target="_blank" href="">TypeScript</a>,&nbsp;
              and&nbsp;
              <a target="_blank" href="https://demos.creative-tim.com/now-ui-kit-react/#/index">Now UI Kit</a>. */}
              Site <a href="https://github.com/mrmusselman1/wedding-site-2" target="_blank">built</a> with love
              by <a href="https://www.matthewrmusselman.com" target="_blank">Matt</a> and <a href="https://rebekahpsmith.com" target="_blank">Bekah</a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
