import React from "react";
import Aux from "../../hoc/Aux";

const layout = props => (
  <Aux>
    <div>Navigation bar, Sign in, Sign up</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
