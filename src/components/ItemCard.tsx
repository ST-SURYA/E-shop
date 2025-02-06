import React from "react";
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice"; // Assuming your Redux slice handles adding to cart

interface ItemCardProps {
  item: {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item)); // Add the item to the cart using Redux
  };

  return (
    <Card>
      <CardMedia component="img" alt={item.name} height="200" image={item.imageUrl} />
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body1">${item.price}</Typography>
        <Button variant="contained" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
