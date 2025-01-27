import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export default function NoteModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [note, setNote] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    setNote(event.target.innerText);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div
            contentEditable
            onInput={handleChange}
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
            {note}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
