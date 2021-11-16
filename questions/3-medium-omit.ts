//https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.zh-CN.md

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K> = {
  [key in Exclude<keyof T, K>]: T[key];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
