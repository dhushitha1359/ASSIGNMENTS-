import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

function ProductCard() {
  return (
    <Card sx={{ width: 350, margin: "50px auto" }}>
      <CardHeader title="Wireless Headphones" subheader="Electronics" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          High-quality wireless headphones with noise cancellation and
          long battery life.
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          ₹4,999
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained">
          Buy Now
        </Button>

        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;