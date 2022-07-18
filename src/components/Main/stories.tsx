import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'default description',
  },
} as ComponentMeta<typeof Main>;

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />;

// Basic.args = {
//   title: 'React Avançado',
//   description: 'Typescript, React, Next e Styled Components',
// };
