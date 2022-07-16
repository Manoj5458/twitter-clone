// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "@/server/router/example";
import { authRouter } from "@/server/router/auth";

export const appRouter = createRouter()
  .transformer(superjson)
  .query("test", {
    resolve({ ctx }) {
      return;
    },
  })
  .merge("example.", exampleRouter)
  .merge("auth.", authRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
