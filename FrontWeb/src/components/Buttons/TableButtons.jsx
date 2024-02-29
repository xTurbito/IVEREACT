
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export function DeleteButton() {
  return (
    <IconButton aria-label="delete" size="large" color="error">
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
}

export function EditButton() {
  return (
    <IconButton aria-label="edit" size="large" color="warning">
      <EditIcon fontSize="inherit"/>
    </IconButton>
  );
}
