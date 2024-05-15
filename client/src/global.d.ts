declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.jpeg';
declare module '*.css';

declare type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
