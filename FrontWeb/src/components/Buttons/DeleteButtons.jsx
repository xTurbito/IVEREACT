import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

export function DeleteButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Stack>
  );
}


export function EditButton() {
  return (
    <div>
      <Button variant="outlined" size="small" startIcon={<EditIcon/>}></Button>
    </div>
  )
}

export default EditButton
