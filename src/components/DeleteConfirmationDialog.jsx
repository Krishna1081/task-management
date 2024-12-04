import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const DeleteConfirmationDialog = ({ open, onClose, onConfirmDelete }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
      <DialogContent>This action cannot be undone.</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirmDelete} color="secondary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired, // Ensures 'open' is a required boolean
  onClose: PropTypes.func.isRequired, // Ensures 'onClose' is a required function
  onConfirmDelete: PropTypes.func.isRequired, // Ensures 'onConfirmDelete' is a required function
};

export default DeleteConfirmationDialog;
