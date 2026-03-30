const CleverTapIdManager = (() => {
  const KEYS = {
    ctId: "ct_prefs.clevertap_id",
    hasIdentity: "ct_prefs.has_real_identity",
  };

  function getOrCreateId() {
    let ctId = localStorage.getItem(KEYS.ctId);
    if (!ctId) {
      ctId = generateId();
      localStorage.setItem(KEYS.ctId, ctId);
    }
    return ctId;
  }

  function saveId(id) {
    localStorage.setItem(KEYS.ctId, id);
    localStorage.setItem(KEYS.hasIdentity, "true");
  }

  function isFirstTimeSignup() {
    return localStorage.getItem(KEYS.hasIdentity) !== "true";
  }

  function generateId() {
    const raw = (
      crypto.randomUUID
        ? crypto.randomUUID()
        : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
          })
    ).replace(/-/g, "");
    return raw.slice(0, 20) + "-sp";
  }

  return { getOrCreateId, saveId, isFirstTimeSignup, generateId };
})();
