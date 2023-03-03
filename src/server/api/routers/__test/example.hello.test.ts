import { test, expect } from "@jest/globals";
import { prisma } from "../../../db";
import { appRouter, AppRouter } from "../../root";
import { Session } from 'next-auth'


// test("Create new item", async () => {
//   const caller = appRouter.createCaller({ session: null, prisma: prisma });
//   const result = await caller.example.createNewItem({
//     userId: "afafasdfa",
//     name: "test",
//     price: "100",
//     description: "test",
//     image: "test",
//   });

//   expect(result).toStrictEqual({
//     userId: "afafasdfa",
//     name: "test",
//     price: "100",
//     description: "test",
//     image: "test",
//   });
// });






// test("Hello World", async () => {
//   const caller = appRouter.createCaller({ session: null, prisma: prisma });
//   const result = await caller.example.hello({ text: "test" });

//   expect(result).toStrictEqual({ greeting: "Hello test" });
// });

// test("registration", async () => {
//     const caller = appRouter.createCaller({ session: null, prisma: prisma });
//     const result = await caller.example.registration({
//         name: "test",
//         email: "adam.rbulalek@email.cz",
//         password: "testfasdfasdfaf",
//         passwordConfirmation: "testfasdfasdfaf",
//     });
//     expect(result).toStrictEqual({ name: "test", email: "adam.rbulalek@email.cz" });
// });
