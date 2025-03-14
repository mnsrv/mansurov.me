// Helper functions for activities
const getActivityConfig = () => {
  // Define activity grouping
  const activityGroups = {
    'Fitness': ['Yoga', 'Workout', 'WeightTraining'],
    'Run': ['Run'],
    'Soccer': ['Soccer'],
    'Ride': ['Ride'],
    'Hike': ['Hike']
  };
  
  // Create emoji map for activity groups
  const emojiMap = {
    'Fitness': '🏋🏻‍♂️',
    'Run': '🏃🏻‍♂️',
    'Soccer': '⚽️',
    'Ride': '🚲',
    'Hike': '🥾',
  };
  
  return {
    activityGroups,
    emojiMap,
    types: Object.values(emojiMap)
  };
};

const getActivityGroup = (activity, config) => {
  for (const [group, types] of Object.entries(config.activityGroups)) {
    if (Array.isArray(types) ? types.includes(activity.type) : types === activity.type) {
      return group;
    }
  }
  return null;
};

const processActivitiesByMonth = (activities) => {
  const config = getActivityConfig();
  const { emojiMap, types } = config;
  
  // Get all unique year-month combinations from activities
  const months = {};
  
  activities.forEach(activity => {
    // Extract year and month from the date string (format: YYYY-MM-DDT...)
    const yearMonth = activity.start_date_local.substring(0, 7); // Gets YYYY-MM
    
    // Process monthly data
    if (!months[yearMonth]) {
      months[yearMonth] = {};
      // Initialize count for each activity type to 0
      types.forEach(type => {
        months[yearMonth][type] = 0;
      });
    }
    
    // Find which group this activity belongs to
    const group = getActivityGroup(activity, config);
    
    // If activity belongs to a defined group, increment the count
    if (group) {
      const emoji = emojiMap[group];
      months[yearMonth][emoji]++;
    }
  });
  
  // Convert months to array and sort by date (newest first)
  const monthRows = Object.entries(months)
    .map(([yearMonth, counts]) => {
      // Split the yearMonth (YYYY-MM) into parts
      const [year, month] = yearMonth.split('-');
      
      return {
        yearMonth,
        label: `${month}/${year}`,
        counts
      };
    })
    .sort((a, b) => b.yearMonth.localeCompare(a.yearMonth));
  
  return {
    title: "Month",
    types,
    rows: monthRows
  };
};

const processActivitiesByYear = (activities) => {
  const config = getActivityConfig();
  const { emojiMap, types } = config;
  
  // Get all unique years from activities
  const years = {};
  
  activities.forEach(activity => {
    // Extract year from the date string (format: YYYY-MM-DDT...)
    const year = activity.start_date_local.substring(0, 4); // Gets YYYY
    
    // Process yearly data
    if (!years[year]) {
      years[year] = {};
      // Initialize count for each activity type to 0
      types.forEach(type => {
        years[year][type] = 0;
      });
    }
    
    // Find which group this activity belongs to
    const group = getActivityGroup(activity, config);
    
    // If activity belongs to a defined group, increment the count
    if (group) {
      const emoji = emojiMap[group];
      years[year][emoji]++;
    }
  });
  
  // Convert years to array and sort by date (newest first)
  const yearRows = Object.entries(years)
    .map(([year, counts]) => ({
      label: year,
      counts
    }))
    .sort((a, b) => b.label.localeCompare(a.label));
  
  return {
    title: "Year",
    types,
    rows: yearRows
  };
};

export default {
  mapBooksReviews: (data) => {
    let reviews = data.collections.bookReviews || [];
    let map = {};
    reviews.forEach((review) => {
      map[review.data.title] = review.page.fileSlug;
    });
    return map;
  },
  book: (data) => {
    if (data.layout === 'book.liquid') {
      return data.books.list.find((b) => b.title === data.title);
    }
    return undefined;
  },
  summaryBooks: (data) => {
    if (data.layout === 'post.liquid' && data.summary) {
      return data.books.list.filter((b) => b.date.startsWith(data.summary));
    }
    return [];
  },
  summaryActivities: (data) => {
    if (data.layout === 'post.liquid' && data.summary) {
      const activities = data.activities.filter((a) =>
        a.start_date_local.startsWith(data.summary),
      );
      
      // If no activities found, return null to prevent rendering the table
      if (activities.length === 0) {
        return null;
      }
      
      // If summary is a year (4 digits), show monthly data
      if (data.summary.length === 4) {
        const result = processActivitiesByMonth(activities);
        // If no rows, return null
        if (result.rows.length === 0) {
          return null;
        }
        return result;
      }
      
      // Otherwise show single month data
      const config = getActivityConfig();
      const { emojiMap, types } = config;
      
      // Initialize counts for all activity types
      const counts = {};
      types.forEach(emoji => {
        counts[emoji] = 0;
      });
      
      // Count activities
      let hasActivities = false;
      activities.forEach(activity => {
        const group = getActivityGroup(activity, config);
        if (group) {
          const emoji = emojiMap[group];
          counts[emoji]++;
          hasActivities = true;
        }
      });
      
      // If no activities found in any category, return null
      if (!hasActivities) {
        return null;
      }
      
      // Format the month name (e.g., "01/2023")
      const month = data.summary.substring(5, 7);
      const year = data.summary.substring(0, 4);
      const monthLabel = `${month}/${year}`;
      
      return {
        title: "Month",
        types,
        rows: [{
          label: monthLabel,
          counts
        }]
      };
    }
    
    // Default empty state - return null to prevent rendering
    return null;
  },
  
  activitiesByMonth: (data) => {
    const monthly = processActivitiesByMonth(data.activities);
    const yearly = processActivitiesByYear(data.activities);
    
    return {
      types: monthly.types,
      monthly,
      yearly
    };
  },
  
  summaryQuotes: (data) => {
    if (data.layout === 'post.liquid' && data.summaryBook) {
      return data.quotes.filter((b) => b.song === data.summaryBook);
    }
    if (data.layout === 'post.liquid' && data.summary) {
      return data.quotes.filter(
        (q) => q.type !== 'book' && q.date.startsWith(data.summary),
      );
    }
    return [];
  },
  summaryPosts: (data) => {
    if (
      data.layout === 'post.liquid' &&
      data.summary &&
      data.summary.length === 4
    ) {
      return data.collections.posts.filter((p) => {
        if (data.page.fileSlug === p.page.fileSlug) {
          return false;
        }
        return `${p.page.date.getFullYear()}-${p.page.date.getMonth().toString().padStart(2, '0')}`.startsWith(
          data.summary,
        );
      });
    }
    return [];
  },
  summaryConcerts: (data) => {
    if (data.layout === 'post.liquid' && data.summary) {
      return data.concerts.filter((c) => c.date.startsWith(data.summary));
    }
    return [];
  },
};
