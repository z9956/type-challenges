//https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.zh-CN.md

//https://www.typescriptlang.org/docs/handbook/type-inference.html
//https://jkchao.github.io/typescript-book-chinese/tips/infer.html

type Awaited<T extends Promise<any>> = T extends Promise<infer K> ? K : never;
