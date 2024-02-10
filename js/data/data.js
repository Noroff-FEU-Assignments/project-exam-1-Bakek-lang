import { makeApiCall } from "./fetch.js";

let allPosts = await makeApiCall();
let originalPosts = [...allPosts];
export let currentPosts = [...allPosts];

export function getInitialPosts() {
  return currentPosts.slice(0, 12);
}

export function getRemainingPosts() {
  return currentPosts.slice(12);
}

export function postsForCarousel() {
  let posts = [...allPosts];
  posts.sort(
    (a, b) => new Date(b.acf.date_of_post) - new Date(a.acf.date_of_post)
  );
  return posts.slice(0, 12);
}

export function onlyBooks() {
  let posts = [...allPosts];
  let bookPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].category_names[0] === "Book") {
      bookPosts.push(posts[i]);
    }
  }
  return bookPosts;
}

export function sortPosts(criteria) {
  if (criteria === "AtoZ") {
    currentPosts.sort((a, b) => a.acf.heading.localeCompare(b.acf.heading));
  } else if (criteria === "ZtoA") {
    currentPosts.sort((a, b) => b.acf.heading.localeCompare(a.acf.heading));
  } else if (criteria === "NewestToOldest") {
    currentPosts.sort(
      (a, b) => new Date(b.acf.date_of_post) - new Date(a.acf.date_of_post)
    );
  } else if (criteria === "OldestToNewest") {
    currentPosts.sort(
      (a, b) => new Date(a.acf.date_of_post) - new Date(b.acf.date_of_post)
    );
  }
}

export function filterPostsByTags(selectedTags) {
  currentPosts = originalPosts;
  if (selectedTags.length > 0) {
    let filteredPosts = [];
    for (let i = 0; i < currentPosts.length; i++) {
      let post = currentPosts[i];

      for (let j = 0; j < post.category_names.length; j++) {
        let postTag = post.category_names[j].toLowerCase();

        if (
          selectedTags.indexOf(postTag) > -1 &&
          filteredPosts.indexOf(post) === -1
        ) {
          filteredPosts.push(post);
        }
      }
    }
    console.log("this is filteredPosts now: ", filteredPosts);
    currentPosts = filteredPosts;
  }
}
