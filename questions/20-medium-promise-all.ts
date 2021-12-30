//https://github.com/type-challenges/type-challenges/blob/master/questions/20-medium-promise-all/README.zh-CN.md

declare function PromiseAll<T extends readonly unknown[]>(
  values: readonly [...T],
): Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
