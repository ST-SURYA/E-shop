import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard"; // Assuming you have ItemCard component
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../redux/slices/categorySlice"; // Redux slice for categories

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.category.categories);

  const [featuredItems, setFeaturedItems] = useState<any[]>([]);

  // Simulating fetching featured items from an API
  useEffect(() => {
    // Mock data for featured items
    setFeaturedItems([
      { id: 1, name: "Smartphone", price: 599, imageUrl: "/images/smartphone.jpg" },
      { id: 2, name: "Laptop", price: 999, imageUrl: "/images/laptop.jpg" },
      { id: 3, name: "Headphones", price: 199, imageUrl: "/images/headphones.jpg" },
    ]);

    // Mock categories fetch from API
    dispatch(setCategories(["Electronics", "Fashion", "Home & Kitchen"]));
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to E-Shop!
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Discover the best deals on electronics, fashion, and home appliances. Start shopping now!
      </Typography>
      
      {/* Category List */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h6" gutterBottom>
          Shop by Category:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((category : string, index : number) => (
            <Grid item key={index}>
              <Button variant="contained" color="secondary" sx={{ margin: 1 }}>
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Items */}
      <Typography variant="h6" gutterBottom>
        Featured Products:
      </Typography>
      <Grid container spacing={4}>
        {featuredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Link to="/items">
          <Button variant="contained" color="primary">
            Shop All Products
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default HomePage;
