import React from "react";
import { Card, CardContent, Text, Spacer } from "vcc-ui";

const NotFoundCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Text variant="ootah">Sorry...</Text>
        <Spacer size={{ default: 4, "@media (max-width: 600px)": 2 }} />
        <Text>No such car exists right now...</Text>
      </CardContent>
    </Card>
  );
};

export default NotFoundCard;
