export class LocalStroage {
  constructor() { }
  public storeInLocalStorage(key: string, content: any) {
    if (this.retrieveFromLocalStorage(key) != null)
      this.removeFromLocalStorage(key);
    localStorage.setItem(key, JSON.stringify(content));
  }
  public retrieveFromLocalStorage(key: string) {
    let storedItem: string = localStorage.getItem(key);
    if (!storedItem) {
      return null;
    }
    return storedItem;
  }
  removeFromLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

}
