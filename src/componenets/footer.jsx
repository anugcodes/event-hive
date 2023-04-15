import React from "react";
import { Footer, Text, Anchor } from "grommet";
export default function PageFooter() {
  return (
    <Footer background="brand" pad="medium">
      <Text>Copyright</Text>
      <Anchor label="About" />
    </Footer>
  );
}
