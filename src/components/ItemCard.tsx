import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ItemCard = ({ id, name, price, image, onAddToCart }: ItemCardProps) => {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto", textAlign: "center" }}>
      <CardMedia component="img" height="180" image={image} alt={name} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">${price}</Typography>
        <Button variant="contained" sx={{ marginTop: 1 }} onClick={onAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
