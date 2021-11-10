//https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.zh-CN.md

type Concat<T extends any[], U extends any[]> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
