import { Group, ActionIcon, Container, Text } from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import classes from "./footer.module.css";
import { AppLink } from '@/libs/config';

interface LinkGroup {
  title: string;
  links: Link[];
}

interface Link {
  label: string;
  link: string;
  isInternal?: boolean;
}

const data: LinkGroup[] = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#features', isInternal: true },
      { label: 'Contact us', link: 'mailto:hello@docmost.com', isInternal: true },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Documentation', link: AppLink.Documentation },
      { label: 'Releases', link: AppLink.Releases },
      { label: 'Blog', link: AppLink.Blog },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discussion (Forum)', link: AppLink.Discussion },
      { label: 'Follow on Twitter (X)', link: AppLink.Twitter },
      { label: 'LinkedIn', link: AppLink.LinkedIn },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target={link.isInternal ? '_self': '_blank'}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" c="dimmed" className={classes.description}>
            An open-source collaborative wiki and documentation software
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()}  Docmost. All rights reserved.
        </Text>

        <Group gap={8} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/docmost/docmost"
            target="_blank"
          >
            <IconBrandGithubFilled size={18} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://twitter.com/docmostHQ"
            target="_blank"
          >
            <IconBrandTwitterFilled size={18} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://www.linkedin.com/company/104338375"
            target="_blank"
          >
            <IconBrandLinkedinFilled size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
