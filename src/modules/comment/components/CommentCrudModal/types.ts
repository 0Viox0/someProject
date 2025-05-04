import { Comment } from 'modules/posts/store/post/types';

export type CommentCrudModalProps = {
    isOpen: boolean;
    title: string;
    onAction: (post: Comment) => void;
    onCancel: () => void;
    footerButtonText: string;
    predefinedComment?: Comment;
    isLoading?: boolean;
};

export type CommentFormValues = {
    name: string;
    email: string;
    commentBody: string;
};
