import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
    Title,
    Image,
  } from '@mantine/core';
  import { MantineLogo } from '@mantinex/mantine-logo';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconTower,
    IconCode,
    IconToolsKitchen2,
    IconChartPie3,
    IconHomeSearch,
    IconBuildingArch,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';

  import Logo from '../assets/TravelN.png'
  
  const mockdata = [
    {
      icon: IconTower,
      title: 'Palaces',
      description: 'Travel to open sky museums to historical buldings and villages',
    },
    {
      icon: IconBuildingArch,
      title: 'Museums',
      description: 'Travel to museums that contains historical subjects',
    },
    {
      icon: IconToolsKitchen2,
      title: 'Restaurants',
      description: 'Go to the Restaurants if you got hungry',
    },
    {
      icon: IconHomeSearch,
      title: 'Hotels',
      description: 'Look for Hotels to survive and sleep',
    },
  ];
  
  export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color='#fcb30c' />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box pb={120}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
          <div className="class" style={{display:'flex'}}>
            <Image src={Logo} style={{height:35,marginRight:10}}alt="Logo"></Image>
            <Title size={27}>Travel N</Title>
          </div>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Home
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Travel
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color='#fcb30c'
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Travel</Text>
                    <Anchor style={{color:'#E09D00'}} href="#" fz="xs">
                      View all Locations
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Travel - N
                        </Text>
                        <Text size="xs" c="dimmed">
                          Travel Whole 🇺🇿 Uzbekistan with Us
                        </Text>
                      </div>
                      <Button variant="default">TRAVEL</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                About Us
              </a>
              <a href="#" className={classes.link}>
                Support
              </a>
            </Group>
  
            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button color='#fcb30c'>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Travel
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color='#fcb30c'
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              About Us
            </a>
            <a href="#" className={classes.link}>
              Support
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant='default'>Log in</Button>
              <Button color='#fcb30c'>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }