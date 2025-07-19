export const wasEnterPressed = (
  event: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>
): Boolean => {
  return event.key === 'Enter' ? true : false;
};
