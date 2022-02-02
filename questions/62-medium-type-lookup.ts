//https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.zh-CN.md

type LookUp<U, T> = U extends Record<"type", T> ? { [K in keyof U]: U[K] }
  : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

const value: LookUp<Animal, "cat"> = { type: "cat", breeds: "Curl" };
