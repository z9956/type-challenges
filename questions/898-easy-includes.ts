//https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.zh-CN.md

type Includes<T extends readonly any[], U> = T extends [infer K, ...infer Rest]
  ? Equal<K, U> extends true ? true : Includes<Rest, U>
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
