import React from "react";
import { Container, Grid, Typography, Box, Button, Paper } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice"; // Assuming removeFromCart action is in cartSlice

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total: number, item: any) => total + item.price, 0);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper sx={{ padding: 2 }}>
                <img src={item.imageUrl} alt={item.name} width="100%" />
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">${item.price}</Typography>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ textAlign: "right", marginTop: 4 }}>
        <Typography variant="h5">Total: ${calculateTotal()}</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default CartPage;
