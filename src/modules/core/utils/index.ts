export function spaceJoin(...values: (string | undefined | null)[]) : string {
  return values.filter((v) => v !== null && v !== undefined).join(" ");
}

const utils = {
  spaceJoin,
};

export default utils;
