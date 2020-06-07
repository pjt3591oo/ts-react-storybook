import * as React from 'react';
import { action } from '@storybook/addon-actions';
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
    <Counter name={content} onChange={action('onchange')}/>
  )
}