import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import styles from "./modal.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIconBack from "@mui/icons-material/ArrowBackIos";

/**
 *
 * The modal components represent the pop-up in the website.
 *
 */

const Modal = ({ isOpen, onClose, title, imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fadeOut]);

  useEffect(() => {
    setLoading(true);
    setShowImage(false);
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handlePrevImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
      );
    }, 500);
  };

  const handleNextImage = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 500);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      PaperProps={{
        style: {
          minWidth: window.innerWidth < 600 ? "auto" : "500px",
          backgroundColor: "#f0f0f0",
          borderRadius: "12px",
        },
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <DialogTitle
          id="customized-dialog-title"
          style={{ flexGrow: 1 }}
          className={styles.modalTitle}>
          {title}
        </DialogTitle>
        <Button
          autoFocus
          onClick={onClose}
          color="primary"
          style={{ marginLeft: "auto" }}>
          X
        </Button>
      </div>
      <DialogContent dividers className={styles.modalImg}>
        {loading && (
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        )}
        {showImage && (
          <img
            src={imageUrls[currentImageIndex]}
            alt={title}
            onLoad={() => setLoading(false)}
            className={`${styles.modalImage} ${fadeOut ? styles.fadeOut : ""}`}
            style={{
              display: loading ? "none" : "block",
              width: window.innerWidth < 600 ? "75vw" : "500px",
              height: window.innerWidth < 600 ? "40vh" : "350px",
              objectFit: "contain",
              transition: "opacity 0.5s",
            }}
          />
        )}
        <DialogActions className={styles["acst"]}>
          <Button onClick={handlePrevImage} className={styles["btn1"]}>
            <ArrowBackIosNewIconBack />
          </Button>
          <Button onClick={handleNextImage} className={styles["btn1"]}>
            <ArrowForwardIosIcon />
          </Button>
        </DialogActions>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default Modal;
