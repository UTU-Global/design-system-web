# utu-design-system

⚠️ `ALPHA` version of the UTU Design System Web implementation. ⚠️

🚧 **WORK IN PROGRESS:** UI/UX, documentation and APIs are subject to change until we hit a v1.0 (*pre*)release, so be sure to check out source files and Storybook builds before integrating the components or styles in your project. 🚧

This project aims to implement the UTU Design System, developed by [3forcom](https://www.3forcom.com/) in collaboration with UTU, in a browser environment using Web Components to enable developers to quickly prototype or develop web applications/sites in a company compliant way.

### How to use
Install with NPM
```bash
$ npm i @utu/design-system
```

Then add in your `.js` or `.ts` files:
```javascript
// Add all of the components
import '@utu/design-system/components';

// Add specific components
import '@utu/design-system/components/button';
import '@utu/design-system/components/card';
import '@utu/design-system/components/datepicker';
import '@utu/design-system/components/switch';
import '@utu/design-system/components/tabs';
```

### License
Internal use.