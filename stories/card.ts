import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';

import './../src/components/card';

const img: string= 'https://source.unsplash.com/random/600x400/';

const background: object = {
  white: 'white',
  light: 'light',
};

addDecorator(withKnobs);

storiesOf('Card', module)
  .add('Playground', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { padding: 30px; } </style>
    
    <h3>&lt;utu-card&gt;</h3>
    <div class="">
      <utu-card
        title=${text('title', 'Title')}
        media=${text('media', img)}
        taxonomy=${text('taxonomy', 'Taxonomy')}
        background=${select('background', background, 'light')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>
    </div>`);