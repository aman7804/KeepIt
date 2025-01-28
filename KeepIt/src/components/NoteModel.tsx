import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ISlotInfo } from "./Home";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface INoteModel {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  handleNoteClosing: () => void;
  noteOpen: boolean;
  slotInfo: ISlotInfo | null;
}

export default function NoteModel(props: INoteModel) {
  const { handleNoteClosing, noteOpen, slotInfo } = props;

  // const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
  //   setNote(event.target.innerText);
  // };

  return (
    <div>
      <Modal
        open={noteOpen}
        onClose={handleNoteClosing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            contentEditable
            // onInput={handleChange}
            role="textbox"
            aria-placeholder="Start typing your note..."
            style={{
              width: "100%",
              minHeight: "100px", // Minimum height
              border: "none",
              outline: "none",
              fontSize: "16px",
              padding: "10px",
              whiteSpace: "pre-wrap", // Allow text to wrap
              wordWrap: "break-word", // Word wrapping
              overflow: "hidden", // No scrollbars
              backgroundColor: "transparent", // Optional: Background
              cursor: "text",
            }}
          >
            THIS IS NOTE of date: {slotInfo?.start.toString()}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
