//https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.zh-CN.md

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
