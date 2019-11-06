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
