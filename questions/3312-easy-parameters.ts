//https://github.com/type-challenges/type-challenges/blob/master/questions/3312-easy-parameters/README.zh-CN.md

type MyParameters<T extends (...args: any[]) => any> = T extends
  (...args: infer P) => any ? P : never;

const foo = (arg1: string, arg2: number): void => {};

type FooType = MyParameters<typeof foo>;
type FooFirstType = MyParameters<typeof foo>[0];

const fun = (...args: FooType) => {
  console.log(args);
};

const fun2 = (arg: FooFirstType) => {
  console.log(arg);
};

fun("1", 2);

fun2("1");
