import React from 'react';
import user from '@testing-library/user-event';
import ContactForm from './contactForm';
import {
  render,
  act,
  screen,
  waitFor,
} from '../../../infra/test/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<contatForm />', () => {
  describe('when form fields are valid', () => {
    test('complete the submission', async () => {
      await act(async () => {
        render(
          <ContactForm
            onSubmit={onSubmit}
          />,
        );
      });

      const button = screen.getByRole('button', { name: /send message/i });
     // expect(button).toBeDisabled();

      const inputName = screen.getByPlaceholderText(/name/i);
      user.type(inputName, 'Zweli');
      await waitFor(() => expect(inputName).toHaveValue('Zweli'));

      const inputEmail = screen.getByPlaceholderText(/email/i);
      user.type(inputEmail, 'zwelisangweni25@gmail.com');
      await waitFor(() => expect(inputEmail).toHaveValue('zwelisangweni25@gmail.com'));

      const inputMessage = screen.getByPlaceholderText(/message/i);
      user.type(inputMessage, 'Hey there! It`s nice to meet you.');
      await waitFor(() => expect(inputMessage).toHaveValue('Hey there! It`s nice to meet you.'));

      //expect(button).not.toBeDisabled();

      await act(async () => user.click(button));

       screen.debug();

      //expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('displays the respective errors', async () => {
      render(<ContactForm onSubmit={onSubmit} />);

      const inputName = screen.getByPlaceholderText(/name/i);
      inputName.focus();
      inputName.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Please fill at least 3 characters');
    });
  });
});
