import { classMap, ClassInfo } from 'lit-html/directives/class-map';

const activeClass = (current: number, active: number): ClassInfo => ({
  'active': current === active,
});

export const activeElement = (current: number, active: number) => 
  classMap(activeClass(current, active));

export const indexToValue = (e: number, i: number): number => i + 1;