import { Meta, StoryObj } from '@storybook/angular';

import { LoginComponent } from './login.component';

type ComponentWithCustomControls = LoginComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Login',
  component: LoginComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Login` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Login: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
