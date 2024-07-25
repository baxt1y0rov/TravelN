import { SegmentedControl } from '@mantine/core';
import classes from './GradientSegmentedControl.module.css';

export default function GradientSegmentedControl() {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['All', 'Palaces', 'Museums', 'Restaurants']}
      classNames={classes}
    />
  );
}