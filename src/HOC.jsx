import React from "react";
function HOC(Moviecontainer) {
  return function Withloading({ isloading }) {
    if (!isloading) return <Moviecontainer />
    return <div class="lds-hourglass"></div>;
  };
}
export default HOC;
