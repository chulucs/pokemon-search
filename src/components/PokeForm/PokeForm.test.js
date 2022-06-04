import { render, screen } from '@testing-library/react';
import PokeForm from './PokeForm';

test("render input in the screen", () => {
  render(<PokeForm />);

  const inputElement = screen.getByTestId("pokemon");
  expect(inputElement).toBeInTheDocument();
});