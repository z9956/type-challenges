//https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.zh-CN.md

type MyExclude<T, U> = T extends U ? never : T;
