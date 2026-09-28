import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("todos").orderBy("order", "asc").collect();
  },
});

export const add = mutation({
  args: { title: v.string(), description: v.optional(v.string()) },
  handler: async (ctx, { title, description }) => {
    await ctx.db.insert("todos", {
      title,
      description: description ?? "",
      completed: false,
      order: Date.now(),
      createdAt: Date.now(),
    });
  },
});

export const update = mutation({
  args: { id: v.id("todos"), patch: v.any() },
  handler: async (ctx, { id, patch }) => {
    await ctx.db.update(id, patch);
  },
});

export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
