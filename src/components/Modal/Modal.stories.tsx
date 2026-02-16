import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal, ModalBody, ModalFooter } from './Modal';
import { Button } from '../Button';
import { Text } from '../Typography';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal component for displaying content in an overlay. Includes focus trap and keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    closeOnBackdropClick: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        description="This is a description of the modal content."
      >
        <ModalBody>
          <Text>
            This is the modal body content. You can put any content here,
            including forms, lists, or other components.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

const DeleteConfirmDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="error" onClick={() => setIsOpen(true)}>
        Delete Item
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        size="sm"
      >
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={() => setIsOpen(false)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const DeleteConfirmation: Story = {
  render: () => <DeleteConfirmDemo />,
};

const SizesDemo = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="outline" onClick={() => setSize('sm')}>Small</Button>
      <Button variant="outline" onClick={() => setSize('md')}>Medium</Button>
      <Button variant="outline" onClick={() => setSize('lg')}>Large</Button>
      <Button variant="outline" onClick={() => setSize('xl')}>XL</Button>
      <Modal
        isOpen={size !== null}
        onClose={() => setSize(null)}
        title={`${size?.toUpperCase()} Modal`}
        size={size || 'md'}
      >
        <ModalBody>
          <Text>This is a {size} sized modal.</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setSize(null)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Sizes: Story = {
  render: () => <SizesDemo />,
};
