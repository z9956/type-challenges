//https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.zh-CN.md

type DeepReadonly<T> = {
    readonly [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepReadonly<T[Key]> : T[Key];
}

/*
type DeepReadonly<T> = T extends Function ? T : {
  readonly [Key in keyof T]: DeepReadonly<T[Key]>;
};
* */

type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

const todo: DeepReadonly<X> // should be same as `Expected`
;
