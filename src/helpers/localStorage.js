const myLocalStorage = localStorage;

function setLocalStorage(userData, keyName) {
  const content = JSON.stringify(userData);
  return myLocalStorage.setItem(keyName, content);
}

function getLocalStorage(keyName) {
  const content = JSON.parse(myLocalStorage.getItem(keyName));
  if (!content) return [];
  return content;
}

export { setLocalStorage, getLocalStorage };
