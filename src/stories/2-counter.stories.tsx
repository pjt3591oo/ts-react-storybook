import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Counter from '../Counter';

export default {
  title: 'Counter',
  component: Counter,
  decorators: [withKnobs]
};

export const counter = () => {
  const content = text('name', 'mung1')
  return (
    <Counter name={content} />
  )
}