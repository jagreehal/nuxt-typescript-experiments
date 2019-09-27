import { render, fireEvent } from '@testing-library/vue';
import TestComponent from './TestComponent.vue';

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query the component.
  const { getByText } = render(TestComponent);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0');

  // `button` is the actual DOM element.
  const button = getByText('increment');

  // Dispatch a couple of native click events.
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText('Times clicked: 2');
});
