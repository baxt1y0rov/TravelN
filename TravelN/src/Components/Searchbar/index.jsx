import { TextInput, ActionIcon, useMantineTheme, rem, Center, Paper } from '@mantine/core';
import { IconSearch, IconArrowRight } from '@tabler/icons-react';

export default function InputWithButton() {
  return (
    <Center>
      <TextInput
        style={{ width: rem(700), marginLeft: 20, marginRight: 20, }}
        radius="xl"
        size="lg"
        placeholder="Places to Go, Destinations, Vacations..."
        rightSectionWidth={42}
        leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        rightSection={
          <ActionIcon size={32} radius="xl" color='#fcb30c' variant="filled">
            <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        }
      />
    </Center>
  );
}