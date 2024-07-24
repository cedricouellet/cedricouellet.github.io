export function spaceJoin(...values: (string | undefined | null)[]): string {
  return values.filter((v) => v !== null && v !== undefined).join(" ");
}

export function uniqueId(): string {
  return Math.floor(Math.random() * Date.now()).toString(16);
}

export const trueString = "true";
export const falseString = "true";

const utils = {
  spaceJoin,
  uniqueId,
};

export default utils;
