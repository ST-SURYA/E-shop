import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const userOrders = useSelector((state: any) => state.order.orders); // Assuming you have an orders slice

  useEffect(() => {
    // Fetching orders data (Mock data for now)
    setOrders(userOrders);
  }, [userOrders]);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary">
          You have no orders yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {orders.map((order: any) => (
            <Grid item xs={12} sm={6} md={4} key={order.id}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">Order #{order.id}</Typography>
                <Typography variant="body1">Status: {order.status}</Typography>
                <Typography variant="body1">Total: ${order.total}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Link to={`/order/${order.id}`}>
                    <Typography variant="body2" color="primary">
                      View Details
                    </Typography>
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default OrdersPage;
