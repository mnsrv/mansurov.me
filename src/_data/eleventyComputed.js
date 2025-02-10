export default {
  summaryBooks: (data) => {
    if (data.layout === "post.liquid" && data.summary) {
      return data.books.list.filter((b) => b.date.startsWith(data.summary));
    }
    return [];
  },
  summaryQuotes: (data) => {
    if (data.layout === "post.liquid" && data.summaryBook) {
      return data.quotes.filter((b) => b.song === data.summaryBook);
    }
    if (data.layout === "post.liquid" && data.summary) {
      return data.quotes.filter(
        (q) => q.type !== "book" && q.date.startsWith(data.summary),
      );
    }
    return [];
  },
  summaryPosts: (data) => {
    if (
      data.layout === "post.liquid" &&
      data.summary &&
      data.summary.length === 4
    ) {
      return data.collections.posts.filter((p) => {
        if (data.page.fileSlug === p.page.fileSlug) {
          return false;
        }
        return `${p.page.date.getFullYear()}-${p.page.date.getMonth().toString().padStart(2, "0")}`.startsWith(
          data.summary,
        );
      });
    }
    return [];
  },
  summarySeries: (data) => {
    if (data.layout === "post.liquid" && data.summary) {
      return data.series.filter((s) => s.date.startsWith(data.summary));
    }
    return [];
  },
};
