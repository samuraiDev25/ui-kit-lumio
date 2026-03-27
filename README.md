# @jstrommash/ui-kit-lumio

Reusable React UI components built with TypeScript, Radix UI, and SCSS modules.

## Installation

```bash
npm install @jstrommash/ui-kit-lumio react react-dom
```

## Usage

Import the global stylesheet once in your application entrypoint:

```tsx
import '@jstrommash/ui-kit-lumio/styles.css';
```

Then import the components you need:

```tsx
import { Button, Checkbox, DatePicker, Typography } from '@jstrommash/ui-kit-lumio';

export function Example() {
  return (
    <div>
      <Typography variant={'h1'}>Lumio UI Kit</Typography>
      <Button variant={'primary'}>Primary action</Button>
      <Checkbox checked={true} onChangeAction={() => {}} label={'Accept terms'} />
      <DatePicker mode={'multiple'} onChangeAction={() => {}} />
    </div>
  );
}
```

Icons are available from the package root as well:

```tsx
import { CalendarOutline, Search } from '@jstrommash/ui-kit-lumio';
```

## Development

```bash
npm run dev
npm run storybook
```

## Publishing Checklist

```bash
pnpm run format
npm run lint
pnpm run build
npm pack
```
