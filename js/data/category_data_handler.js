// for progressbars in about page

export function creatingCategoryCounter(category_data) {
  let categoryCounts = {};
  const totalPosts = category_data.length;

  // counting categories
  for (let i = 0; i < category_data.length; i++) {
    for (let j = 0; j < category_data[i].category_names.length; j++) {
      let categoryName = category_data[i].category_names[j];

      if (categoryCounts[categoryName]) {
        categoryCounts[categoryName]++;
      } else {
        categoryCounts[categoryName] = 1;
      }
    }
  }

  // calculating percentages
  Object.keys(categoryCounts).forEach((tagName) => {
    let count = categoryCounts[tagName];
    console.log(count);
    let percentage = (count / totalPosts) * 100;
    categoryCounts[tagName] = percentage;
  });

  // sorting based on percentages
  let sortedCategoryCounts = Object.entries(categoryCounts).sort(
    (a, b) => b[1] - a[1]
  );
  return sortedCategoryCounts;
}
