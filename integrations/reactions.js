import { firestore } from "@site/integrations/firebase";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";

const collectionName = "reactions";

export function zeroReactions(reactions) {
  const objReactions = {};
  reactions.forEach((r) => (objReactions[r] = 0));
  return objReactions;
}

export function initializeReactionCountsFromDB(
  slug,
  reactionCounts,
  setReactionCounts
) {
  getDoc(doc(firestore, collectionName, slug))
    .then((res) => {
      if (res.exists()) {
        const dataDB = res.data();
        Object.keys(reactionCounts).forEach((r) => {
          if (!Object.keys(dataDB).includes(r)) {
            dataDB[r] = 0;
          }
        });
        setReactionCounts(dataDB);
      } else {
        updateReactionsDB(slug, reactionCounts);
      }
    })
    .catch((err) => {
      console.log("[initializeReactionCountsFromDB] error:", err);
    });
}

export function updateReactionsDB(slug, reactionCounts) {
  const newDocRef = doc(firestore, collectionName, slug);
  setDoc(newDocRef, reactionCounts).catch((err) => {
    console.log(err);
  });
}

const localStorageKey = (slug) => {
  return "@ovisly-blog-reactions-" + slug;
};

export function getReactionStateLocal(slug, reaction) {
  const key = localStorageKey(slug);
  const item = localStorage.getItem(key);
  if (item === null) {
    const itemObj = {};
    itemObj[reaction] = false;
    localStorage.setItem(key, JSON.stringify(itemObj));
    return false;
  } else {
    // Check if the reaction is in the object.
    const itemObj = JSON.parse(item);
    if (Object.keys(itemObj).includes(reaction)) {
      return itemObj[reaction];
    } else {
      itemObj[reaction] = false;
      localStorage.setItem(key, JSON.stringify(itemObj));
      return false;
    }
  }
}

export function setReactionStateLocal(slug, reaction, value) {
  const key = localStorageKey(slug);
  const item = localStorage.getItem(key);
  const itemObj = JSON.parse(item);

  itemObj[reaction] = value;
  localStorage.setItem(key, JSON.stringify(itemObj));
}