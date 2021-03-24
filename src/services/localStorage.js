const myLocalStorage = localStorage;

function setLocalStorage(userData) {
  const keyName = "githup_app_react_last_search";
  const content = JSON.stringify(userData);
  return myLocalStorage.setItem(keyName, content);
}

function getLocalStorage() {
  const content = JSON.parse(
    myLocalStorage.getItem("githup_app_react_last_search")
  );
  if (!content) return [];
  return content;
}

export { setLocalStorage, getLocalStorage };
