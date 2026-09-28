import { defineApp } from "convex/server";

export default defineApp({
  functions: {
    list: "./todos",
    add: "./todos",
    update: "./todos",
    remove: "./todos",
  },
});
