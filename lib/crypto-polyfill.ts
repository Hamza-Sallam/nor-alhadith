// Crypto polyfill for environments where crypto.randomUUID is not available
if (typeof global !== 'undefined' && !global.crypto) {
  global.crypto = {} as Crypto;
}

if (typeof global !== 'undefined' && !global.crypto.randomUUID) {
  global.crypto.randomUUID = function(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}

// Also ensure it's available in the browser
if (typeof window !== 'undefined' && !window.crypto?.randomUUID) {
  if (!window.crypto) {
    (window as any).crypto = {};
  }
  (window as any).crypto.randomUUID = function(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };
}
