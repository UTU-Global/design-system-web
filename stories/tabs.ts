import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';
import './../src/components/tabs';

const labels: string = 'About us, Pricing, Contacts';

addDecorator(withKnobs);

storiesOf('Tabs', module)
  .add('Playground', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { padding: 30px; } </style>

    <h3>&lt;utu-tabs&gt;</h3>
    <utu-tabs
      labels=${text('labels', labels)}
      active=${number('active', 0)}
      ?fitted=${boolean('fitted', false)}
      @change=${action('change')}
    >
      <utu-tab-content>First content</utu-tab-content>
      <utu-tab-content>Second content</utu-tab-content>
      <utu-tab-content>Third content</utu-tab-content>
    </utu-tabs>`);