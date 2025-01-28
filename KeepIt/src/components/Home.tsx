import Cookies from "js-cookie";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";
import NoteModel from "./NoteModel";

const localizer = momentLocalizer(moment);
export interface ISlotInfo {
  start: Date; // The starting date/time of the selection
  end: Date; // The ending date/time of the selection
  slots: Array<Date>; // An array of all the dates or times included in the selection
  action: string; // The action type, either "select" or "click"
}

function Home() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleLogout = () => {
    Cookies.remove("access_token");
    window.location.href = "/auth"; // force redirect to login page
  };

  const [noteOpen, setNoteOpen] = React.useState<boolean>(false);
  const [slotInfo, setSlotInfo] = React.useState<ISlotInfo | null>(null);

  const handleNoteOpening = (slotInfo: ISlotInfo) => {
    setNoteOpen(true);
    setSlotInfo(slotInfo);
  };
  const handleNoteClosing = () => setNoteOpen(false);

  return (
    <>
      <h1>HOME</h1>
      <div style={{ height: "500px", width: "1000px", margin: "20px" }}>
        <Calendar
          localizer={localizer}
          selectable
          onSelectSlot={(slotInfo) => handleNoteOpening(slotInfo)}
          // startAccessor={"start"}
          // endAccessor={"end"}
          // style={{ height: 500 }}
        />
      </div>
      <NoteModel
        handleNoteClosing={handleNoteClosing}
        noteOpen={noteOpen}
        slotInfo={slotInfo}
      />
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
