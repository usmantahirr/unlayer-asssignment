export function readFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
}

export function writeInLocalStorage(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}

export function clearLocalStorage() {
  localStorage.clear();
}

export function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
