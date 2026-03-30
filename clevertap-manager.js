const CleverTapManager = (() => {
  let ctId = null;
  function init() {
    ctId = CleverTapIdManager.getOrCreateId();
    console.log("[CT] init → ctId: " + ctId + " → dashboard: _w_" + ctId);
  }

  function onUserLogin(profile, clevertapID) {
    ctId = clevertapID;
    CleverTapIdManager.saveId(clevertapID);
    console.log("[CT] onUserLogin → " + clevertapID + " → _w_" + clevertapID);

    clevertap.onUserLogin.push({
      Site: Object.assign({}, profile, { customId: clevertapID }),
    });
  }

  function onFirstSignup(profile, clevertapID) {
    ctId = clevertapID;
    CleverTapIdManager.saveId(clevertapID);
    console.log(
      "[CT] onFirstSignup → enriching _w_" +
        clevertapID +
        " in place (same ID)",
    );
    clevertap.onUserLogin.push({
      Site: Object.assign({}, profile, { customId: clevertapID }),
    });
  }

  function pushEvent(eventName, props) {
    const finalProps = Object.assign({}, props || {});
    if (ctId) finalProps["userID"] = ctId;
    clevertap.event.push(eventName, finalProps);
    console.log("[CT] pushEvent → " + eventName, finalProps);
  }

  function getCurrentCtId() {
    return ctId;
  }

  return { init, onUserLogin, onFirstSignup, pushEvent, getCurrentCtId };
})();
