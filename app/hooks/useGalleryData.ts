"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Loader<T> = () => Promise<T>;

const dataCache = new Map<string, unknown>();
const pendingCache = new Map<string, Promise<unknown>>();

export function useGalleryData<T>(key: string, loader: Loader<T>): T | null {
  const cached = useMemo(() => dataCache.get(key) as T | undefined, [key]);
  const [data, setData] = useState<T | null>(cached ?? null);

  const loadData = useCallback(() => {
    if (dataCache.has(key)) {
      setData(dataCache.get(key) as T);
      return;
    }

    let pending = pendingCache.get(key);
    if (!pending) {
      pending = loader()
        .then((result) => {
          dataCache.set(key, result);
          pendingCache.delete(key);
          return result;
        })
        .catch((err) => {
          pendingCache.delete(key);
          throw err;
        });
      pendingCache.set(key, pending);
    }

    pending
      .then((result) => {
        setData(result as T);
      })
      .catch(() => {
        setData(null);
      });
  }, [key, loader]);

  useEffect(() => {
    if (data === null) {
      loadData();
    }
  }, [data, loadData]);

  return data;
}
