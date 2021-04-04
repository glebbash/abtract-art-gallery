/* eslint-disable import/prefer-default-export */

export function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
