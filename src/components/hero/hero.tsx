import { Title, Text, Button, Container, Image } from "@mantine/core";
import classes from "./hero.module.css";
import { AppLink } from "@/libs/config";

export function Hero() {
  return (
    <>
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            Open-source collaborative <br /> wiki and documentation software
          </Title>

          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              Create, collaborate, and share knowledge seamlessly with Docmost. <br />
              Ideal for managing your wiki, knowledge-base, documentation and a lot more.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              variant="default"
              color="gray"
              component="a"
              target="_blank"
              href={AppLink.Github}
            >
              Github
            </Button>
            <Button
              variant="subtle"
              className={classes.control}
              size="lg"
              component="a"
              target="_blank"
              href={AppLink.Demo}
            >
              Live demo
            </Button>
          </div>
        </div>
      </Container>

      <Container size={1000}>
        <Image
          radius="md"
          src="/screenshots/editor.png"
          alt="editor screenshot"
          style={{
            border: "2px solid var(--mantine-color-gray-3)",
            boxShadow: "rgba(0, 0, 0, 0.07) 0px 2px 45px 4px",
          }}
        />
      </Container>
    </>
  );
}
