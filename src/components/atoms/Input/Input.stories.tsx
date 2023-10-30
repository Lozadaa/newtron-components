import type { Meta, StoryObj } from '@storybook/react';
import InputController from './Input';
import MForm from '../Form/MForm';

const meta = {
  title: 'Atoms/Input',
  component: InputController,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => (<MForm><Story /></MForm>)],
  tags: ['autodocs'],
  args: {
    name: "name",
    placeholder: 'Please write your name',
    defaultValue: 'Richard',
    label: 'Name',
  },
} satisfies Meta<typeof InputController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "name",
  },
};
