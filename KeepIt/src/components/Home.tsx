import Cookies from "js-cookie";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const localizer = momentLocalizer(moment);

function Home() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleLogout = () => {
    Cookies.remove("access_token");
    window.location.href = "/auth"; // force redirect to login page
  };

  return (
    <>
      <h1>HOME</h1>
      <div style={{ height: "500px", width: "1000px", margin: "20px" }}>
        <Calendar
          localizer={localizer}
          selectable
          onSelectSlot={(slotInfo) => {
            alert(`You clicked on date: ${slotInfo.start}`);
          }}
          // startAccessor={"start"}
          // endAccessor={"end"}
          // style={{ height: 500 }}
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
