//https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.zh-CN.md

declare const config: Chainable;

type Chainable<T = {}> = {
  // option<K extends keyof any, V>(key: K, value: V): Chainable<T & { [P in K]: V }>
  option<K extends keyof any, V>(key: K, value: V): Chainable<T & Record<K, V>>;
  get(): T;
};

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}
