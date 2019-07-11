import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default function PositionedSnackbar(props) {
  const state = {
    vertical: 'top',
    horizontal: 'center',
  };

  const { vertical, horizontal } = state;




  return (
    <div>
      
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        variant="success"
        autoHideDuration={600}
        open={props.open}
        onClose={props.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{props.message}</span>}
      />
    </div>
  );
}