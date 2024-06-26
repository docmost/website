import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import classes from "./footer.module.css";
import { AppLink } from "@/libs/config";

const links = [
  { link: AppLink.Github, label: "Github" },

  { link: "/docs", label: "Documentation" },
  { link: AppLink.Blog, label: "Blog" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      target="_blank"
      lh={1}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.inner}>
      <div></div>

      <Group className={classes.links}>{items}</Group>

      <Group gap="xs" justify="flex-end" wrap="nowrap">
        <ActionIcon
          size="lg"
          variant="default"
          radius="xl"
          component="a"
          href="https://github.com/docmost/docmost"
          target="_blank"
        >
          <IconBrandGithub
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon
          size="lg"
          variant="default"
          radius="xl"
          component="a"
          href="https://twitter.com/docmostHQ"
          target="_blank"
        >
          <IconBrandTwitter
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
    </div>
  );
}
