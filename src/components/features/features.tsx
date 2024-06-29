import { Text, Title, Container, SimpleGrid, rem } from "@mantine/core";
import {
  IconGauge,
  IconLock,
  IconMessage,
  IconUsersGroup,
  IconSearch,
  IconHistory,
  IconSpaces,
  IconWifi,
  IconFileStack,
  IconPaperclip,
} from "@tabler/icons-react";
import { Feature } from "@/components/features/feature";
import classes from "./features.module.css";
import { ScreenshotCarousel } from "@/components/features/screenshot-carousel";

export const featureItems = [
  {
    icon: IconWifi,
    title: "Real-time collaborative rich-text editor",
    description:
      "The editor allows multiple users to simultaneously edit pages in real-time. It has support for tables, math (LaTex), and callouts to name a few.",
  },
  {
    icon: IconLock,
    title: "Permissions system",
    description:
      "Control who can view, edit, and manage content with a robust permissions system, ensuring information is secure and accessible to the right people.",
  },
  {
    icon: IconSpaces,
    title: "Spaces",
    description:
      "Organize your content into distinct spaces dedicated to different teams, projects, or departments, providing a structured and focused environment for collaboration.",
  },
  {
    icon: IconUsersGroup,
    title: "Groups",
    description:
      "Create and manage user groups to grant unified permissions, making it simple to control access by assigning roles and privileges collectively.",
  },
  {
    icon: IconMessage,
    title: "Comment system",
    description:
      "Engage in meaningful discussions directly on your pages with the integrated inline commenting system.",
  },
  {
    icon: IconHistory,
    title: "Page History",
    description:
      "View the history of changes made to each page, allowing you to track edits over time and revert to previous versions if needs be.",
  },
  {
    icon: IconSearch,
    title: "Search",
    description:
      "The search is powered by Postgres full-text search which system allows you to quickly locate the information you need across all pages.",
  },
  {
    icon: IconFileStack,
    title: "Nested pages",
    description:
      "Docmost supports nesting of pages to any level. You can reorder and manage your pages through simple drag-and-drop functionality directly from the sidebar.",
  },

  {
    icon: IconPaperclip,
    title: "Attachments",
    description:
      "Easily attach images and videos to your pages just by pasting from your clipboard. Docmost supports both S3 and local storage drivers.",
  },
];

export function Features() {
  const features = featureItems.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <div>
      <Container className={classes.wrapper} id="features">
        <Title order={2} className={classes.title}>
          Features
        </Title>

        {/*
            <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Features
        </Text>
      </Container>
         */}

        <SimpleGrid
          mt={60}
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: "xl", md: 50 }}
          verticalSpacing={{ base: "xl", md: 50 }}
        >
          {features}
        </SimpleGrid>
      </Container>

      <ScreenshotCarousel />
    </div>
  );
}
