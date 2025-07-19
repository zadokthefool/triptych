// Scrolls to the top of the page
export const scrollToTop = (speed: number) => {
  const transition = speed === 0 ? 'instant' : 'smooth';
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: transition });
  }, speed);
};

// Scrolls to the bottom of the page
export const scrollToBottom = (speed: number) => {
  const transition = speed === 0 ? 'instant' : 'smooth';
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: transition,
    });
  }, speed);
};

export const getScrollbarWidth = () => {
  // Create a temporary div element
  const div = document.createElement('div');
  div.style.overflow = 'scroll'; // Trigger scrollbar
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  // Append the div to the body
  document.body.appendChild(div);

  // Calculate the scrollbar width
  const scrollbarWidth = div.offsetWidth - div.clientWidth;

  // Remove the div from the body
  document.body.removeChild(div);

  return scrollbarWidth;
};

export const isScrollbarVisible = (element: HTMLElement) => {
  return element.scrollHeight > element.clientHeight;
};
