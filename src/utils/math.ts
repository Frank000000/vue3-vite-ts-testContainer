export const isString = (test: any): test is string => {
  return typeof test === "string";
}

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'