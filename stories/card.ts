import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

import styles from './../src/visual/index.scss';

import './../src/components/card';

const img: string= 'https://source.unsplash.com/random/300x180/';

const background: object = {
  white: 'white',
  light: 'light',
};

addDecorator(withKnobs);

const template: TemplateResult = html`
  <style>
    body { padding: 30px; } 
    .wrapper { display: grid; grid-template-columns: repeat(4, 1fr); grid-column-gap: 20px; } 
  </style>
`;

storiesOf('Card', module)
  .add('White background (default)', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { background: #f5f5f5; } </style>
    ${template}
    
    <h3>&lt;utu-card&gt;</h3>
    <div class="wrapper">
      <utu-card
        background=${select('background', background, 'white')}
      >
        <p>Basic, just <b>regular</b> <i>text</i> content within the tag.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      </utu-card>

      <utu-card
        title=${text('title', 'Full features')}
        media=${text('media', img)}
        taxonomy=${text('taxonomy', 'Taxonomy')}
        background=${select('background', background, 'white')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>

      <utu-card
        title="No image"
        taxonomy=${text('taxonomy', 'Taxonomy')}
        background=${select('background', background, 'white')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>

      <utu-card
        title="Title + content"
        background=${select('background', background, 'white')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>
    </div>`);

storiesOf('Card', module)
  .add('Gray background', (): TemplateResult => html`
    <style>${styles}</style>
    <style>body { background: #fff }</style>
    ${template}
    
    <h3>&lt;utu-card&gt;</h3>
    <div class="wrapper">
      <utu-card
        background=${select('background', background, 'light')}
      >
        <p>Basic, just <b>regular</b> <i>text</i> content within the tag.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
      </utu-card>

      <utu-card
        title=${text('title', 'Full features')}
        media=${text('media', img)}
        taxonomy=${text('taxonomy', 'Taxonomy')}
        background=${select('background', background, 'light')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>

      <utu-card
        title="No image"
        taxonomy=${text('taxonomy', 'Taxonomy')}
        background=${select('background', background, 'light')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>

      <utu-card
        title="Title + content"
        background=${select('background', background, 'light')}
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
      </utu-card>
    </div>`);