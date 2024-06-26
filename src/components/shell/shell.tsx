"use client";

import {
  AppShell,
  Container,
  Group,
  Burger,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import classes from "./shell.module.css";
import { Footer } from "@/components/shell/footer";
import Link from "next/link";
import ColorSchemeControl from "@/components/ui/color-scheme-control";
import { AppLink } from "@/libs/config";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header withBorder={false}>
        <Container size="xl" p={"xs"}>
          <Group h="100%" px={"md"}>
            <Group justify="space-between" style={{ flex: 1 }}>
              <Text
                size="lg"
                fw={600}
                style={{ cursor: "pointer", userSelect: "none" }}
              >
                Docmost
              </Text>

              <Group ml="xl" gap={0} visibleFrom="sm">
                <UnstyledButton
                  className={classes.control}
                  component={Link}
                  href="/"
                >
                  Home
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="#features"
                  className={classes.control}
                >
                  Features
                </UnstyledButton>
                <UnstyledButton
                  component="a"
                  href="/docs"
                  target="_blank"
                  className={classes.control}
                >
                  Docs
                </UnstyledButton>
                <UnstyledButton
                  className={classes.control}
                  component="a"
                  href={AppLink.Github}
                  target="_blank"
                >
                  Github
                </UnstyledButton>
                <UnstyledButton
                  className={classes.control}
                  component="a"
                  href="/blog"
                  target="_blank"
                >
                  Blog
                </UnstyledButton>

                <ColorSchemeControl />
              </Group>
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control} component={Link} href="/">
          Home
        </UnstyledButton>
        <UnstyledButton
          component="a"
          href="#features"
          className={classes.control}
        >
          Features
        </UnstyledButton>
        <UnstyledButton
          component="a"
          href="/docs"
          target="_blank"
          className={classes.control}
        >
          Docs
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          component="a"
          href={AppLink.Github}
          target="_blank"
        >
          Github
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          component="a"
          href="/blog"
          target="_blank"
        >
          Blog
        </UnstyledButton>

        <ColorSchemeControl />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer className={classes.footer} withBorder={false}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
