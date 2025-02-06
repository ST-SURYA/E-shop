import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-Shop
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Cart
        </Button>
        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
