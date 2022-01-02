exports = async (input) => {
  const cluster = context.services.get("mongodb-atlas");
  const books = cluster.db("book-store").collection("books");

  const pipeline = [];

  if (input && input.search) {
    pipeline.push({
      $search: {
        index: "default",
        text: {
          query: input.search,
          path: { wildcard: "*" },
        },
      },
    });
  }

  const result = await books.aggregate(pipeline);

  return result.toArray();
};
