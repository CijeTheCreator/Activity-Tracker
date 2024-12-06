export const createDatabase = (
  dbName: string,
  storeName: string,
  version: number = 1,
): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request: IDBOpenDBRequest = indexedDB.open(dbName, version);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" }); // Use 'id' as the primary key
      }
    };

    request.onsuccess = (event: Event) =>
      resolve((event.target as IDBOpenDBRequest).result);
    request.onerror = (event: Event) =>
      reject((event.target as IDBOpenDBRequest).error);
  });
};

export const addData = <T extends Record<string, unknown>>(
  db: IDBDatabase,
  storeName: string,
  data: T[],
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const transaction: IDBTransaction = db.transaction(storeName, "readwrite");
    const store: IDBObjectStore = transaction.objectStore(storeName);

    data.forEach((item) => store.add(item));

    transaction.oncomplete = () => resolve("Data added successfully");
    transaction.onerror = (event: Event) =>
      reject((event.target as IDBTransaction).error);
  });
};

export const getAllData = <T>(
  db: IDBDatabase,
  storeName: string,
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const transaction: IDBTransaction = db.transaction(storeName, "readonly");
    const store: IDBObjectStore = transaction.objectStore(storeName);

    const request: IDBRequest<T[]> = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = (event: Event) =>
      reject((event.target as IDBRequest).error);
  });
};

export const deleteData = (
  db: IDBDatabase,
  storeName: string,
  key: IDBValidKey,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const transaction: IDBTransaction = db.transaction(storeName, "readwrite");
    const store: IDBObjectStore = transaction.objectStore(storeName);

    const request: IDBRequest = store.delete(key);

    request.onsuccess = () => resolve("Data deleted successfully");
    request.onerror = (event: Event) =>
      reject((event.target as IDBRequest).error);
  });
};
