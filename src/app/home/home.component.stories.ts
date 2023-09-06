import { Meta, StoryObj } from '@storybook/angular';

import { HomeComponent } from './home.component';

type ComponentWithCustomControls = HomeComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Home',
  component: HomeComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Home` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Home: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
