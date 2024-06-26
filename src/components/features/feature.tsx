import { rem, Text, ThemeIcon, Card } from "@mantine/core";
import React from "react";
import classes from "./features.module.css";

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card shadow="sm" radius="md" className={classes.item}>
      <ThemeIcon variant="light" color="blue" size={30}>
        <Icon size={18} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" lh={1.6} className={classes.featureDescription}>
        {description}
      </Text>
    </Card>
  );
}
