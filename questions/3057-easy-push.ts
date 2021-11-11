//https://github.com/type-challenges/type-challenges/blob/master/questions/3057-easy-push/README.zh-CN.md

type Push<T, U> = T extends any[] ? [...T, U] : [];
//type Push<T extends any[], U> = [...T, U]

type Result = Push<[1, 2], "3">; // [1, 2, '3']
