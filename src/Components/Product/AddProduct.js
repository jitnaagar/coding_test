import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ProductForm from './ProductForm';
import { Box } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CutomTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function AddProduct({ open, setOpen, getProducts }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="md"
                fullWidth
            >
                <CutomTitle id="customized-dialog-title" onClose={handleClose}>
                Product
                </CutomTitle>
                <DialogContent dividers>
                    <Box px={3} py={2}>
                        <Box>
                            <ProductForm 
                                getProducts={getProducts}
                                handleClose={handleClose}
                            />
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions
                  sx={{
                    justifyContent:"center"
                  }}
                >
                    <Button 
                        type="submit"
                        form='add-product-form'
                        variant="contained"
                        >
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}

AddProduct.propTypes = {
    open : PropTypes.bool.isRequired,
    setOpen : PropTypes.func.isRequired,
    getProducts : PropTypes.func.isRequired
}