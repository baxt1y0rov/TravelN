import { Anchor, Group, ActionIcon, rem, Image, Title, Paper } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterCentered.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'About Us' },
  { link: '#', label: 'Travel' },
  { link: '#', label: 'FAQ' },
  { link: '#', label: 'Privacy' },
];

export default function FooterCentered() {
  const items = links.map((link) => (
    <Paper className='paperlinks' style={{backgroundColor:'#fff'}} >
    <Anchor style={{marginBottom:10,marginTop:5}}
      c="black"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
    </Paper>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div className="class" style={{display:'flex'}}>
            <Image src="../../public/traveln.png" style={{height:35,marginRight:10}}alt="Logo"></Image>
            <Title size={27}>Travel N</Title>
        </div>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}