import { css } from 'styled-components';

interface IMediaSizes {
    xl: number;
    lg: number;
    md: number;
    sm: number;
    [key: string]: number;
}

const sizes: IMediaSizes = {
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576
}

const foo: any = {};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
    acc[label] = (...args: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(foo, ...args)}
    }
  `
    return acc;
}, {})