import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar.img" />
      <p>{props.tele}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h2>My Contacts</h2>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tele="+123 456 789"
      email="beyonce@gmail.com"
    />
    <Card
      name="Itachi Uchiha"
      img="https://th.bing.com/th/id/OIP.E1IE_KKdNJnryM3JFyUBewHaFj?w=273&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      tele="+12365498"
      email="uchihaclan@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
