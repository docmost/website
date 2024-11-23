"use client";

import { useEffect, useState } from 'react';
import { Carousel } from "@mantine/carousel";
import { Container, Image, Modal, Text, Title } from "@mantine/core";
import classes from "./features.module.css";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

interface ImageProps {
  url: string;
  title: string;
  width: number;
  height: number;
}
const images: ImageProps[] = [
  { url: "/screenshots/home.png", title: "Workspace home", width: 1200, height: 800 },
  { url: "/screenshots/editor.png", title: "Editor", width: 1500, height: 800 },
  { url: "/screenshots/editor2.png", title: "Editor", width: 1500, height: 800 },
  { url: "/screenshots/slash-command.png", title: "Editor slash command", width: 1500, height: 800 },
  { url: "/screenshots/page-history.png", title: "Page history", width: 1500, height: 800 },
  { url: "/screenshots/search.png", title: "Search", width: 1500, height: 800 },
  { url: "/screenshots/space-list.png", title: "Space list", width: 1200, height: 800 },
  { url: "/screenshots/space-permissions.png", title: "Space permissions", width: 1500, height: 800 },
  { url: "/screenshots/space-overview.png", title: "Space overview", width: 1500, height: 800 },
  { url: "/screenshots/member-list.png", title: "Workspace member list", width: 1500, height: 800 },
];

export function ScreenshotCarousel() {
  const galleryId = "gallery";

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryId,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-expect-error
      lightbox = null;
    };
  }, []);

  const slides = images.map((image, index) => (
    <Carousel.Slide key={image.url}>
      <a
        href={image.url}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        key={galleryId + '-' + index}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={classes.carouselImage}
          src={image.url}
          alt={image.title}
          h={200}
          style={{ cursor: 'pointer' }}
        />
      </a>
    </Carousel.Slide>
));

return (
  <div className={classes.carouselWrapper} id="screenshots">
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
        className="pswp-gallery"
        id={galleryId}
      >
        {slides}
      </Carousel>
    </div>
  );
}
