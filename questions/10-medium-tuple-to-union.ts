//https://github.com/type-challenges/type-challenges/blob/master/questions/10-medium-tuple-to-union/README.zh-CN.md

type Arr = ["1", "2", "3"];

type TupleToUnion<T> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;

/*type TupleToUnion<T> = T extends Array<infer U>
    ? U
    : never;*/

const a: TupleToUnion<Arr> // expected to be '1' | '2' | '3'
;
