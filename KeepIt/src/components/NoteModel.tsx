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
  p: 2, // Padding inside the box
  overflow: "hidden", // Hide scrollbars
};

interface INoteModel {
  handleNoteClosing: () => void;
  noteOpen: boolean;
  slotInfo: ISlotInfo | null;
}

export default function NoteModel(props: INoteModel) {
  const { handleNoteClosing, noteOpen, slotInfo } = props;
  const [note, setNote] = React.useState("");

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  return (
    <Modal
      open={noteOpen}
      onClose={handleNoteClosing}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Start typing your note..."
          style={{
            width: "100%",
            height: "150px",
            border: "none",
            outline: "none",
            resize: "none", // Prevent resizing
            overflow: "hidden", // Hide scrollbars
            padding: "8px",
            fontSize: "16px",
            lineHeight: "1.5",
            backgroundColor: "transparent",
          }}
        />
      </Box>
    </Modal>
  );
}
