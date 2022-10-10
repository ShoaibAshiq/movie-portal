import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { COLORS } from "../../app.constant";

function ReviewCard({ review }) {
  return (
    <Box>
      <Card variant="outlined" sx={{ maxWidth: 1022, mb: "10px" }}>
        <CardHeader
          avatar={
            <Avatar
              src={`${process.env.REACT_APP_IMG_URL}${review?.author_details?.avatar_path}`}
              onError={(e) => {
                e.target.src =
                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
              }}
              sx={{ bgcolor: COLORS.tmdbLightBlue }}
              aria-label="recipe"
            >
              {review?.author_details?.name?.charAt(0)}
            </Avatar>
          }
          title={`A review by ${review?.author_details?.username}`}
          subheader={`Written by ${review?.author_details?.username} on ${
            review?.created_at?.split("T")?.[0]
          }`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {review?.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ReviewCard;
