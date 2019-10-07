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
          <p></p>
        </footer>
      </div>
    );
  }
}

export default Layout;
