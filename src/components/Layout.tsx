import type { FC, PropsWithChildren } from "react";
import "styles/layout.scss"

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="layout">
      <div className="nav">
        <p>"The New York Times" article search application</p>
      </div>
      <div className="children">
        {children}
      </div>
    </div>
  );
};

export default Layout;
