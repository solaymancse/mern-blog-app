import React from 'react'

import Dialog from '@mui/material/Dialog';



export const DialogComponents = ({openState,handleDialogClose,content}) => {
  return (
    <Dialog
        open={openState}
        onClose={handleDialogClose}
        content
        
      >
        {content}
      </Dialog>
  )
}
