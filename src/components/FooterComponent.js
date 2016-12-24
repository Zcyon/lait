'use strict';

import React from 'react';

require('styles//Footer.css');

let FooterComponent = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Lait</strong> by Lascario Pacheco. The source code is licensed under MIT.
      </p>
    </div>
  </footer>
);

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
