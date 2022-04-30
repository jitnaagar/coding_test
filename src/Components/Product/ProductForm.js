/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Formik, Field, Form } from 'formik'
import { Select, TextField } from 'formik-mui'
import { Box,CircularProgress, FormControl, Grid, MenuItem } from '@mui/material';

function ProductForm({handleClose, getProducts}) {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState('')
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unitPrice, setUnitPrice] = useState('')

    const initialValues = {
        product, 
        type,
        unitPrice,
        quantity
    }

    return (
        <>
            {
                loading
                ?
                <Box>
                    <CircularProgress
                    />
                </Box>
                :
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        product: Yup.string().required('Required'),
                        quantity: Yup.number().required('Required'),
                        unitPrice: Yup.number().required('Required'),
                        type : Yup.string().required('Required')
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        handleClose();
                        resetForm();
                        getProducts(values);
                    }}
                >
                    {({ handleSubmit, isSubmitting, handleChange }) => (
                        <Form onSubmit={handleSubmit} id="add-product-form">
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <Field
                                            component={TextField}
                                            label="Product"
                                            name="product"
                                            fullWidth
                                            autoComplete="off"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Field
                                            component={TextField}
                                            label="Quantity"
                                            name="quantity"
                                            autoComplete="off"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Field
                                            component={TextField}
                                            label="UnitPrice"
                                            name="unitPrice"
                                            autoComplete="off"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl fullWidth >
                                            {/* <InputLabel id="nationality-label">Nationality</InputLabel> */}
                                            <Field
                                                // labelId="nationality-label"
                                                id="type"
                                                component={Select}
                                                label="Type"
                                                name="type"
                                                variant="outlined"
                                            >
                                                <MenuItem value="food">Food</MenuItem>
                                                <MenuItem value="drinks">Drinks</MenuItem>
                                            </Field>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Form>
                    )}
                </Formik>
            }
        </>
    )
}

ProductForm.propTypes = {
    getProducts : PropTypes.func.isRequired,
    handleClose : PropTypes.func.isRequired
}

export default ProductForm