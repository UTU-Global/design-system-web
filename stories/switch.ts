import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/switch';

addDecorator(withKnobs);

storiesOf('Switch', module)
  .add('Playground',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-switch&gt;</h3>
      <utu-switch
        ?active=${boolean('active', false)}
        @change=${action('change')}
      ></utu-switch>
    `);