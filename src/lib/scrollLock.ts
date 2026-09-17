let lockCount = 0;
let scrollY = 0;

function isElementScrollable(element: Element): boolean {
  let el: Element | null = element;

  while (el && el !== document.documentElement) {
    const { overflowY } = window.getComputedStyle(el);

    if (
      (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
      el.scrollHeight > el.clientHeight + 1
    ) {
      return true;
    }

    el = el.parentElement;
  }

  return false;
}

function preventBackgroundScroll(event: TouchEvent | WheelEvent) {
  const target = event.target;
  if (target instanceof Element && isElementScrollable(target)) {
    return;
  }

  event.preventDefault();
}

function applyLock() {
  scrollY = window.scrollY;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.documentElement.classList.add('scroll-locked');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  document.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
  document.addEventListener('wheel', preventBackgroundScroll, { passive: false });
}

function removeLock() {
  document.documentElement.classList.remove('scroll-locked');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.paddingRight = '';

  document.removeEventListener('touchmove', preventBackgroundScroll);
  document.removeEventListener('wheel', preventBackgroundScroll);

  window.scrollTo(0, scrollY);
}

export function lockScroll() {
  if (lockCount === 0) {
    applyLock();
  }

  lockCount += 1;
}

export function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    removeLock();
  }
}
