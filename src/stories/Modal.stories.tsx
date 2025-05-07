import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, FC, useState } from 'react';
import { Modal, Button } from 'ui';
import { ModalProps } from 'ui/Modal/types';

type StoryProps = ComponentProps<typeof Modal>;

const meta = {
    component: Modal,
    title: 'components/Modal',
    args: {
        isOpen: false,
    },
    render: (args) => <Wrapper args={args} />,
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        cancelText: 'Cancel',
        okText: 'Ok',
        theme: 'primary',
        title: 'This is some title',
    },
};

export const Secondary: Story = {
    args: {
        footer: (
            <>
                <button style={{ marginRight: '20px' }}>Custom Button</button>
                <button>Custom Button</button>
            </>
        ),
        cancelText: 'Cancel',
        okText: 'Ok',
        theme: 'secondary',
        title: 'This is some title',
    },
};

export const Info: Story = {
    args: {
        cancelText: 'Cancel text',
        okText: 'Ok text',
        theme: 'info',
    },
};

export const Danger: Story = {
    args: {
        theme: 'danger',
        title: 'This is some title',
    },
};

type TemplateProps = {
    args: ModalProps;
};

const Wrapper: FC<TemplateProps> = ({ args }) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleOk = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleButtonClick} theme={args.theme}>
                Open modal
            </Button>
            <Modal
                {...args}
                isOpen={isOpen}
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <div style={{ marginLeft: '40px' }}>
                    <h1>This is some header</h1>
                    <p>This is some paragraph</p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos repellat deserunt at voluptatem repudiandae
                        molestias ullam dolor mollitia, quia odio dicta nesciunt
                        nemo sunt ratione recusandae? Modi molestiae placeat at.
                    </p>
                </div>
            </Modal>
        </>
    );
};
