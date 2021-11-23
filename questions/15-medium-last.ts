// https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.zh-CN.md

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
