import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, Button, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice"; // Assuming cartSlice handles cart actions

const ItemDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.item.items);
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const selectedItem = items.find((item: any) => item.id.toString() === id);
    if (selectedItem) {
      setItem(selectedItem);
    }
  }, [id, items]);

  const handleAddToCart = () => {
    if (item) {
      dispatch(addItem(item));
    }
  };

  if (!item) {
    return (
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          Item not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={item.imageUrl} alt={item.name} width="100%" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            ${item.price}
          </Typography>
          <Typography variant="body1" paragraph>
            Detailed description of the product.
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetailsPage;
