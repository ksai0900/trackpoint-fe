import { Meta, StoryObj } from '@storybook/angular';

import { NavComponent } from './nav.component';

type ComponentWithCustomControls = NavComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Nav',
  component: NavComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Nav` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Nav: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
