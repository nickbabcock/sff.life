import React from "react";
import { Link } from "gatsby";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    return (
      <div className="layout">
        <header className="header">
          <h1>
            <Link className="transparent" to={`/`}>
              {title}
            </Link>
          </h1>
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
          <hr/>
          <p>This site is a labor of love. There is no commenting system, but I'm happy to have each article link to external discussion sites like reddit.</p>
          <p>Bugs, issues, or requests can either be directed at the <a href="https://github.com/nickbabcock/sff.life">github repo</a> or sent via email to hi [at] sff [dot] life</p>
        </footer>
      </div>
    );
  }
}

export default Layout;
