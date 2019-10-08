import { storiesOf, addDecorator } from '@storybook/polymer';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';
import { action } from '@storybook/addon-actions';

// import { component, useState, useEffect } from 'haunted';

import styles from './../src/visual/index.scss';
import './../src/components/pagination';

addDecorator(withKnobs);

storiesOf('Pagination', module)
  .add('Playground',
    (): TemplateResult => html`
      <style>${styles}</style>
      <style>body { padding: 30px; } </style>
      <h3>&lt;utu-pagination&gt;</h3>
      <utu-pagination
        total=${number('total', 5)}
        active=${number('active', 1)}
        noboundaries=${boolean('noboundaries', false)}
        @change=${action('change')}
      ></utu-pagination>
    `);