//https://github.com/type-challenges/type-challenges/blob/master/questions/2-medium-return-type/README.zh-CN.md

//ReturnType https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype

const fn = (v: boolean) => {
  if (v) {
    return 1;
  } else {
    return 2;
  }
};

type MyReturnType<T> = T extends (...args: any) => infer P ? P : never;

type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"
