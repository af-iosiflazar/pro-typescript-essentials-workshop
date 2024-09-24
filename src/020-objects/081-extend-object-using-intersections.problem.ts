import { Extends, Expect } from "@total-typescript/helpers";

type DBO = {
  id: string;
  createdAt: Date;
};

type User = DBO & {
  name: string;
  email: string;
};

type Product = DBO & {
  name: string;
  price: number;
};

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >
];
