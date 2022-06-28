import { AddPostForm } from './AddPostForm';
import { render, screen, } from '../../test/test-utils'

describe('AddPostForm Component Test', () => {
    render(<AddPostForm />, {})

    it('renders elements correctly', () => {
        expect(screen.getByText("Add a New Post")).toBeDefined();
        expect(screen.getByLabelText("Post Title:")).toBeDefined();
        expect(screen.getByRole('textbox', { name: 'postTitle' })).toBeDefined();

        expect(screen.getByLabelText("Author:")).toBeDefined();
        expect(screen.getByRole('combobox', { name: 'postAuthor' })).toBeDefined();
        expect(screen.getByLabelText("Content:")).toBeDefined();
        expect(screen.getByRole('textbox', { name: 'postContent' })).toBeDefined();
        expect(screen.getByRole("button")).toBeDisabled();
    })
})