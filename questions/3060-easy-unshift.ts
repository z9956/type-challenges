//https://github.com/type-challenges/type-challenges/blob/master/questions/3060-easy-unshift/README.zh-CN.md

type Unshift<T extends any[], U> = [U, ...T];

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
