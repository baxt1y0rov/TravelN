import { Autocomplete, Group, Burger, rem, Text, Image, Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSearch.module.css';
import FaqSimple from '../Components/Aboutus'
// import Data from './Search/index.jsx'

const links = [
  { link: '/index.jsx', label: 'Home' },
  { link: '/travel', label: 'Travel' },
  { link: {FaqSimple}, label: 'About Us' },
  { link: '/contactus', label: 'Contact Us' },
];

export default function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Image src="../../public/traveln.png" style={{width:27}}alt="Logo"></Image>
          <Title size={27}>Travel N</Title>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search Destinations"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['Tashkent', 'Jizzakh', 'Ferghana','Sirdarya', 'Samarkand', 'Kashkadarya', 'Andijan', 'Namangan','Khworezm','Bukhara','Navai']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}