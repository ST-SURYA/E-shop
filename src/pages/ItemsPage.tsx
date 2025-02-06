import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import ItemCard from "../components/ItemCard"; // Assuming you have ItemCard component
import { useDispatch, useSelector } from "react-redux";
// import { setItems } from "../redux/slices/itemSlice"; // Redux slice for items

const ItemsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.item.items);

  const [loading, setLoading] = useState<boolean>(true);

  // Simulating fetching all items from an API
  useEffect(() => {
    // Mock data for items
    // setTimeout(() => {
    //   dispatch(setItems([
    //     { id: 1, name: "Smartphone", price: 599, imageUrl: "/images/smartphone.jpg" },
    //     { id: 2, name: "Laptop", price: 999, imageUrl: "/images/laptop.jpg" },
    //     { id: 3, name: "Headphones", price: 199, imageUrl: "/images/headphones.jpg" },
    //     { id: 4, name: "Smart Watch", price: 149, imageUrl: "/images/smartwatch.jpg" },
    //     { id: 5, name: "Tablet", price: 499, imageUrl: "/images/tablet.jpg" },
    //   ]));
    //   setLoading(false);
    // }, 1000); // Simulate API call delay
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        All Products
      </Typography>

      {/* Loading State */}
      {loading ? (
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h6">Loading products...</Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={4}>
            {items?.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: "center", marginTop: 4 }}>
            <Button variant="contained" color="primary">
              View Cart
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ItemsPage;
