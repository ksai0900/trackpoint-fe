import { Meta, StoryObj } from '@storybook/angular';

import { NewAppointmentComponent } from './new-appointment.component';

type ComponentWithCustomControls = NewAppointmentComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/New Appointment',
  component: NewAppointmentComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `NewAppointment` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const NewAppointment: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
