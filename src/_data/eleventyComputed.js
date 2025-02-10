export default {
  summaryBooks: (data) => {
    if (data.layout === "post.liquid" && data.summary) {
      return data.books.list.filter((b) => b.date.startsWith(data.summary));
    }
    return [];
  },
  summaryQuotes: (data) => {
    if (data.layout === "post.liquid" && data.summary) {
      return data.quotes.filter((q) => q.date.startsWith(data.summary));
    }
    if (data.layout === "post.liquid" && data.summaryBook) {
      return data.quotes.filter((b) => b.song === data.summaryBook);
    }
    return [];
  },
};
