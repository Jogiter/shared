/// <reference lib="dom"/>

/**
 * Specify a DOM element where the temporary, behind-the-scenes `textarea` should be appended, in cases where you need to stay within a focus trap, like in a modal.
 * @public
 */
export declare namespace Copy {
  interface Options {
    /**
     * 指定一个DOM元素，在这个元素中应该附加临时的幕后“textarea”，以防您需要停留在焦点中，比如在模态中
     * @defaultValue `document.body`
     */
    readonly target?: HTMLElement;
  }
}

/**
 * 复制字符串到剪贴板
 * 必须响应用户手势事件调用，例如“click”或“keyup”。
 *
 * @example
 * ```ts
 * import { copy } from '@nipem/utils';
 * button.addEventListener('click', () => {
 *   copy('🦄🌈');
 * });
 * ```
 *
 * @example
 * ```ts
 * import { copy } from '@nipem/utils';
 * const modalWithFocusTrap = document.getElementById('modal');
 * button.addEventListener('click', () => {
 * 	copy('🦄🌈', {
 * 		target: modalWithFocusTrap
 * 	});
 * });
 * ```
 *
 * @param input - 需要复制的内容
 * @param option - 可选配置对象
 * @returns 是否复制成功
 *
 * @public
 */
export function copy(
  input: string,
  { target = document.body }: Copy.Options = {}
) {
  const element = document.createElement('textarea');
  const previouslyFocusedElement = document.activeElement;

  element.value = input;

  // Prevent keyboard from showing on mobile
  element.setAttribute('readonly', '');

  // @ts-ignore
  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  let originalRange: boolean | Range = false;
  if (selection && selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  target.append(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = input.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand('copy');
  } catch {}

  element.remove();

  if (selection && originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  // Get the focus back on the previously focused element, if any
  if (previouslyFocusedElement) {
    (previouslyFocusedElement as HTMLElement).focus();
  }

  return isSuccess;
}
