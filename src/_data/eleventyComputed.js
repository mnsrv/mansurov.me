export default {
  summaryBooks: (data) => {
    if (data.layout === "post.liquid" && data.summary) {
      return data.books.list.filter((b) => b.date.startsWith(data.summary));
    }
    return [];
  },
};
