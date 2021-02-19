import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFoundPage;
