import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import style from "./contact.module.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import MessageIcon from "@mui/icons-material/Message";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 *
 * The Contact component represents the pop-up that appears when the user clicks the contact button.
 *  returns the form information.
 */

export default function ContactButton({ props }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "ori_ack",
        "template_3pr0dss",
        event.target,
        "Cb5ZPRDXPurvh_f8r"
      )
      .then(
        (result) => {
          alert("Email was Send !");
          handleClose();
        },
        (error) => {
          console.log(error.text);
          alert("Error");
        }
      );
  };

  return (
    <div>
      <button
        variant="outlined"
        className={style["custom-button"]}
        onClick={handleClickOpen}>
        Contact <PersonOutlineIcon />
      </button>
      <Dialog open={open} onClose={handleClose} className={style["dial55"]}>
        <form onSubmit={handleSubmit}>
          <DialogTitle className={style["title24"]}>
            Contact Me <SentimentSatisfiedAltIcon />
          </DialogTitle>

          <DialogContent className={style["conte23"]}>
            <div className={style["linkd2"]}>
              <a
                href="https://www.linkedin.com/in/orackerman1997/"
                target="_blank"
                className={style["linkd"]}
                rel="noreferrer">
                <LinkedInIcon
                  style={{
                    marginRight: "22px",
                  }}
                />
              </a>
              <a
                href="tel:+972-54-8347599"
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeftLeft: "19px",
                  textDecoration: "none",
                  color: "inherit",
                }}>
                <PhoneIcon style={{ marginRight: "8px" }} />
                054-8347599
              </a>
            </div>

            <TextField
              margin="dense"
              id="name"
              name="from_name"
              label="Full Name"
              type="text"
              required
              fullWidth
              variant="filled"
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              required
              name="email"
              sx={{ mb: 3 }}
              fullWidth
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              id="phone"
              name="phone"
              label="Phone"
              type="tel"
              sx={{ mb: 3 }}
              fullWidth
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              id="company"
              label="Company"
              name="company"
              type="text"
              required
              sx={{ mb: 3 }}
              fullWidth
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BusinessIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="dense"
              id="message"
              name="message"
              label="Message"
              type="text"
              required
              sx={{ mb: 3 }}
              fullWidth
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Send</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
