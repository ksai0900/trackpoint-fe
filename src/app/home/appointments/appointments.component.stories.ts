import { Meta, StoryObj } from '@storybook/angular';

import { AppointmentsComponent } from './appointments.component';

type ComponentWithCustomControls = AppointmentsComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Appointments',
  component: AppointmentsComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Appointments` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Appointments: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
