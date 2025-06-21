// Helper functions for activities
const getActivityConfig = () => {
  // Define activity grouping
  const activityGroups = {
    'Soccer': ['Soccer'],
    'Fitness': ['Yoga', 'Workout', 'WeightTraining'],
    'Hike': ['Hike'],
    'Run': ['Run'],
    'Ride': ['Ride']
  };
  
  // Create emoji map for activity groups
  const emojiMap = {
    'Soccer': '⚽️',
    'Fitness': '💪🏻',
    'Hike': '🥾',
    'Run': '🏃🏻‍♂️',
    'Ride': '🚲'
  };
  
  // Define which activities should show distance instead of count
  const distanceActivities = ['Run', 'Ride'];
  
  // Define the order of activities
  const orderedTypes = ['⚽️', '💪🏻', '🥾', '🏃🏻‍♂️', '🚲'];
  
  return {
    activityGroups,
    emojiMap,
    types: orderedTypes,
    distanceActivities
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

const formatDistance = (meters) => {
  if (meters === 0) return 0;
  
  // Convert to kilometers and round to 1 decimal place
  const km = (meters / 1000).toFixed(1);
  return parseFloat(km); // Remove trailing zero if it's a whole number
};

// Helper function to process an activity and update counts
const processActivity = (activity, countsObj, config) => {
  const group = getActivityGroup(activity, config);
  let activityProcessed = false;
  
  if (group) {
    const emoji = config.emojiMap[group];
    
    // If this is a distance-based activity and has distance data, add the distance
    if (config.distanceActivities.includes(group) && activity.distance) {
      countsObj[emoji] += activity.distance;
    } else {
      // Otherwise just count it
      countsObj[emoji]++;
    }
    
    activityProcessed = true;
  }
  
  return activityProcessed;
};

// Helper function to format counts (convert distances to km)
const formatCounts = (counts, config) => {
  const formattedCounts = { ...counts };
  
  for (const [group, types] of Object.entries(config.activityGroups)) {
    if (config.distanceActivities.includes(group)) {
      const emoji = config.emojiMap[group];
      formattedCounts[emoji] = formatDistance(counts[emoji]);
    }
  }
  
  return formattedCounts;
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
      // Initialize count/distance for each activity type to 0
      types.forEach(type => {
        months[yearMonth][type] = 0;
      });
    }
    
    // Process the activity
    processActivity(activity, months[yearMonth], config);
  });
  
  // Convert months to array and sort by date (newest first)
  const monthRows = Object.entries(months)
    .map(([yearMonth, counts]) => {
      // Split the yearMonth (YYYY-MM) into parts
      const [year, month] = yearMonth.split('-');
      
      // Format distances for distance-based activities
      const formattedCounts = formatCounts(counts, config);
      
      return {
        yearMonth,
        label: `${month}/${year}`,
        counts: formattedCounts
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
      // Initialize count/distance for each activity type to 0
      types.forEach(type => {
        years[year][type] = 0;
      });
    }
    
    // Process the activity
    processActivity(activity, years[year], config);
  });
  
  // Convert years to array and sort by date (newest first)
  const yearRows = Object.entries(years)
    .map(([year, counts]) => {
      // Format distances for distance-based activities
      const formattedCounts = formatCounts(counts, config);
      
      return {
        label: year,
        counts: formattedCounts
      };
    })
    .sort((a, b) => b.label.localeCompare(a.label));
  
  return {
    title: "Year",
    types,
    rows: yearRows
  };
};

const processActivitiesForMonth = (activities) => {
  const config = getActivityConfig();
  const { types } = config;
  
  // Initialize counts for all activity types
  const counts = {};
  types.forEach(emoji => {
    counts[emoji] = 0;
  });
  
  // Count activities or sum distances
  let hasActivities = false;
  
  activities.forEach(activity => {
    // Process the activity and track if any were processed
    const processed = processActivity(activity, counts, config);
    if (processed) {
      hasActivities = true;
    }
  });
  
  // Format distances for distance-based activities
  const formattedCounts = formatCounts(counts, config);
  
  return {
    hasActivities,
    counts: formattedCounts
  };
};

const processActivitiesByDay = (activities) => {
  const config = getActivityConfig();
  const { emojiMap } = config;
  
  // Define priority order for activities (higher index = higher priority)
  const activityPriority = {
    'Hike': 5,
    'Soccer': 4,
    'Run': 3,
    'Fitness': 2,
    'Ride': 1,
  };
  
  // Group activities by date
  const days = {};
  
  activities.forEach(activity => {
    // Extract date from the activity (format: YYYY-MM-DDT...)
    const date = activity.start_date_local.substring(0, 10); // Gets YYYY-MM-DD
    
    if (!days[date]) {
      days[date] = [];
    }
    
    // Get the activity group and emoji
    const group = getActivityGroup(activity, config);
    if (group) {
      const emoji = emojiMap[group];
      const priority = activityPriority[group] || 0;
      days[date].push({ emoji, priority, group });
    }
  });
  
  // Convert to array format similar to sleep data
  const dayRows = Object.entries(days)
    .map(([date, activities]) => {
      // Sort activities by priority (highest first) and take the first one
      activities.sort((a, b) => b.priority - a.priority);
      const topActivity = activities[0];
      
      return {
        date,
        activity: topActivity.emoji
      };
    })
    .sort((a, b) => a.date.localeCompare(b.date));
  
  return dayRows;
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
      
      // If summary is a year (4 digits), show monthly data with totals
      if (data.summary.length === 4) {
        const monthlyResult = processActivitiesByMonth(activities);
        
        // If no rows, return null
        if (monthlyResult.rows.length === 0) {
          return null;
        }
        
        // Calculate totals for the year
        const config = getActivityConfig();
        const { types } = config;
        
        // Initialize counts for all activity types
        const totalCounts = {};
        types.forEach(type => {
          totalCounts[type] = 0;
        });
        
        // Process all activities directly instead of summing the monthly counts
        // This ensures accurate calculations, especially for distance-based activities
        activities.forEach(activity => {
          processActivity(activity, totalCounts, config);
        });
        
        // Format distances for distance-based activities
        const formattedTotalCounts = formatCounts(totalCounts, config);
        
        // Add a totals row
        monthlyResult.rows.push({
          label: "Total",
          counts: formattedTotalCounts,
          isTotal: true // Flag to potentially style differently
        });
        
        return monthlyResult;
      }
      
      // Otherwise show single month data
      const { hasActivities, counts } = processActivitiesForMonth(activities);
      
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
        types: getActivityConfig().types,
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
  
  activitiesByDay: (data) => {
    return processActivitiesByDay(data.activities);
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
