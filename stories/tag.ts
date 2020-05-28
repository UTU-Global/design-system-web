import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/tag';

addDecorator(withKnobs);

const states: any = {
  success: 'success',
  error: 'error',
  neutral: 'neutral',
  warning: 'warning',
  info: 'info',
  default: ''
};

storiesOf('Tag', module)
  .add('Playground', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { padding: 30px; } </style>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">

    <h3>&lt;utu-tag&gt;</h3>
    <utu-tag
      uuid=${text('uuid', '123')}
      ?inverse=${boolean('inverse', false)}
      state=${select('state', states, '')}
      @remove=${action('remove')}
    >
      Some tag
    </utu-tag>

    <utu-tag
      uuid="item-2"
      ?inverse=${boolean('inverse', false)}
      state=${select('state', states, '')}
      @remove=${action('remove')}
    >
      Another tag
    </utu-tag>
    
`);