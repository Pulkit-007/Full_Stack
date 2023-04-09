import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img} />
    <img src={img + "?grayscale"} />
    <img
      className="food-img"
      src="https://www.bing.com/images/search?view=detailV2&ccid=uNBi4LfK&id=B56443910AE3B8CABD8E43C2B4E1DA9DD471FC6F&thid=OIP.uNBi4LfKxpfYF5QjONnvLQHaLH&mediaurl=https%3a%2f%2fwww.thechunkychef.com%2fwp-content%2fuploads%2f2014%2f12%2fSpicy-Thai-Noodles-5.jpg&exph=2400&expw=1600&q=noodles&simid=608020636338102230&FORM=IRPRST&ck=C4F87D3B3BDF40FF3EF3FC972FBC0D5F&selectedIndex=0"
      alt="noodles"
    ></img>

    <div></div>
  </div>,
  document.getElementById("root")
);
