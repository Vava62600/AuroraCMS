import '@testing-library/jest-dom/extend-expect';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}