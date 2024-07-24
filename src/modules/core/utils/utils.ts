export function spaceJoin(...values: (string | undefined | null)[]): string {
  return values.filter((v) => v !== null && v !== undefined).join(" ");
}

export function uniqueId(): string {
  return Math.floor(Math.random() * Date.now()).toString(16);
}

export function repeat(numberOfTimes: number, func: Function) {
  for (let i = 0; i < numberOfTimes; i++) {
    func();
  }
}

export const trueString = "true";
export const falseString = "true";

const utils = {
  spaceJoin,
  uniqueId,
  repeat,
};

export default utils;
