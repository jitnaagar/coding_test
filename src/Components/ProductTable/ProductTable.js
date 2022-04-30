import React from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, CssBaseline, Divider, TableContainer, Table, Typography, Button, TableRow, TableHead, TableBody, TableCell, Paper, Skeleton } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize : '18px',
    fontWeight : 'bold'
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    boxShadow : '0px 0px 10px #ccc',
}));

function ProductTable({ setOpen, products, loading, handleDeleteId }) {

    const handleClickDelete = id => {
        handleDeleteId(id)
    }

    return (
        <Box>
            <Container component="main" sx={{ mt: 6, mb: 4 }}>
                {
                    loading 
                    ?
                    <Box>
                        <Skeleton 
                            variant="text"
                            height={50}
                        />
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Skeleton
                                variant="text"
                                height={100}
                                width={150}
                            />
                        </Box>
                        <Box>
                            <Skeleton 
                                variant="text"
                                height={100}
                            />
                            <Skeleton 
                                variant="text"
                                height={100}
                            />
                            <Skeleton 
                                variant="text"
                                height={100}
                            />
                        </Box>
                    </Box>
                    :
                    <Box>

                        <Divider>Product  List</Divider>
                        <CssBaseline />
                        <Box
                            sx={{
                            marginTop: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            }}
                        >
                            <Box sx={{ width: "100%", textAlign: "right", mb: 1 }}>
                                <Typography><Button variant="outlined" startIcon={<AddIcon />} onClick={() => setOpen(true)}> Add Product</Button> </Typography>
                            </Box>
                            <StyledTableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center">Product</StyledTableCell>
                                            <StyledTableCell align="center">Type</StyledTableCell>
                                            <StyledTableCell align="center">Quantity</StyledTableCell>
                                            <StyledTableCell align="center">UnitPrice</StyledTableCell>
                                            <StyledTableCell align="center">Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products.map((row,index) => (
                                            <TableRow key={index}>
                                            <TableCell align="center">{row.product}</TableCell>
                                            <TableCell align="center">{row.type}</TableCell>
                                            <TableCell align="center">{row.quantity}</TableCell>
                                            <TableCell align="center">{row.unitPrice}</TableCell>
                                            <TableCell align="center">
                                                <Button variant="outlined" value={index} onClick={()=> handleClickDelete(index)} sx={{ ml: 1 }}>Delete</Button>
                                            </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </StyledTableContainer>
                        </Box>
                    </Box>
                }
            </Container>
        </Box>
    )
}

ProductTable.propTypes = {
    loading : PropTypes.bool.isRequired,
    products : PropTypes.arrayOf(PropTypes.any).isRequired,
    setOpen : PropTypes.func.isRequired
}

export default ProductTable