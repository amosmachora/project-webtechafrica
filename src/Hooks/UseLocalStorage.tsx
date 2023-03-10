import React, { useEffect, useState } from "react";

function getDefaultValue<T>(key: string, initialValue: T | null): T | null {
  const storedValue: string | null = localStorage.getItem(key);

  if (storedValue) {
    return JSON.parse(storedValue);
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

export function useLocalStorage<T>(
  initialValue: T | null,
  key: string
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] {
  const [value, setValue] = useState<T | null>(
    getDefaultValue(key, initialValue)
  );

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
