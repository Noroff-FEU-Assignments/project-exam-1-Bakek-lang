import { makeApiCall } from "./fetch.js";

let allPosts = await makeApiCall();
let currentPosts = [...allPosts];

export function getInitialPosts() {
  return currentPosts.slice(0, 12);
}

export function getRemainingPosts() {
  return currentPosts.slice(12);
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
