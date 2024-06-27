"use client";

import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Container, Image, Modal, Text, Title } from "@mantine/core";
import classes from "./features.module.css";

const images = [
  { url: "/screenshots/home.png", title: "Workspace home" },
  { url: "/screenshots/editor.png", title: "Editor" },
  { url: "/screenshots/editor2.png", title: "Editor" },
  { url: "/screenshots/slash-command.png", title: "Editor slash command" },
  { url: "/screenshots/page-history.png", title: "Page history" },
  { url: "/screenshots/search.png", title: "Search" },
  { url: "/screenshots/space-list.png", title: "Space list" },
  { url: "/screenshots/space-permissions.png", title: "Space permissions" },
  { url: "/screenshots/space-overview.png", title: "Space overview" },
  { url: "/screenshots/member-list.png", title: "Workspace member list" },
];

export function ScreenshotCarousel() {
  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  const slides = images.map((image) => (
    <Carousel.Slide key={image.url}>
      <Image
        className={classes.carouselImage}
        src={image.url}
        alt={image.title}
        h={200}
        onClick={() => {
          setSelectedImage(image.url);
          setSelectedTitle(image.title);
          setOpened(true);
        }}
        style={{ cursor: "pointer" }}
      />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.carouselWrapper}>
      <Title order={2} className={classes.title}>
        Screenshots
      </Title>

      <Carousel
        classNames={{ indicator: classes.carouselIndicator }}
        withIndicators
        height={200}
        maw={900}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
      >
        {slides}
      </Carousel>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedTitle}
        size="auto"
      >
        <Container size="lg">
          <Image src={selectedImage} alt={selectedTitle} />
        </Container>
      </Modal>
    </div>
  );
}
