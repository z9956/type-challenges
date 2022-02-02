//https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.zh-CN.md

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : S;

// let value: TrimLeft<'    str'> = 'str'
let foo: TrimLeft<"   \n\t foo bar "> = "foo bar ";

console.log(foo);
