import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from 'ui';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Textarea>;

const meta = {
    component: Textarea,
    title: 'Components/Textarea',
    parameters: {
        layout: 'centered',
    },
    args: {
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim eos repellendus quibusdam ratione eaque. Iste similique culpa cumque, ratione accusantium molestias unde dolore animi quisquam neque fugiat ex eaque?',
        rows: 10,
        style: {
            width: '400px',
        },
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Secondary: Story = {
    args: {
        theme: 'secondary',
    },
};

export const Primary: Story = {
    args: {
        theme: 'primary',
    },
};

export const Info: Story = {
    args: {
        theme: 'info',
    },
};

export const Danger: Story = {
    args: {
        theme: 'danger',
    },
};

export const WithScrollbar: Story = {
    args: {
        theme: 'primary',
        value: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illo voluptatum temporibus quo natus pariatur. Ipsa beatae sint a temporibus, laboriosam iste vel exercitationem est ex debitis commodi maiores tempora delectus possimus nihil labore earum modi voluptatum quia voluptatem eveniet dolores corrupti veritatis repellat. Amet distinctio assumenda quaerat explicabo itaque nobis corporis deleniti et? Sapiente adipisci atque aspernatur! Architecto odio aut labore delectus. Temporibus, harum? Accusamus rem placeat, libero quis corrupti optio deserunt suscipit qui eum quaerat quisquam tempora eos id aliquam? Corporis amet dicta exercitationem fugiat eos quisquam. Perspiciatis obcaecati minima consectetur asperiores quo ea facilis quae earum aut nisi deleniti pariatur aliquam harum, labore, minus illum alias quaerat expedita dolorum possimus dolor? Ipsum maxime tempora amet officiis consequuntur quaerat saepe iure distinctio veritatis laudantium doloribus dolore, aspernatur temporibus provident reprehenderit ducimus! Perspiciatis cum omnis odit placeat enim. Deleniti ut cupiditate, ipsa et doloribus accusantium, temporibus pariatur qui illum sapiente blanditiis eligendi nihil nobis in ipsam voluptatibus praesentium, obcaecati distinctio dolor? Quam delectus autem adipisci, perspiciatis excepturi reiciendis a cum, unde, mollitia ad repudiandae expedita eveniet facilis quis atque debitis? Perferendis accusamus, magnam architecto deserunt dolorem fugit aperiam fuga itaque inventore ducimus voluptatem vel vitae fugiat, illum quam id?`,
    },
};
