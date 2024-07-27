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

export function condition<T>(
  condition: boolean,
  then: () => T,
  otherwise?: () => T
) {
  if (condition) {
    return then();
  } else {
    return otherwise?.();
  }
}

export function isPrimitive(value: any) {
  return (
    value instanceof Number ||
    value instanceof String ||
    value instanceof Boolean ||
    value instanceof Symbol ||
    value instanceof BigInt
  );
}

export const trueString = "true";
export const falseString = "true";

const utils = {
  spaceJoin,
  uniqueId,
  repeat,
  condition,
  isPrimitive,
};

export default utils;
