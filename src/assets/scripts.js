const waitForElement = (selector) => {
  return new Promise((resolve) => {
      console.log("Waiting for", selector);
      const interval = setInterval(() => {
          const element = document.querySelector(selector);
          if (element) {
              clearInterval(interval);
              resolve(element);
          }
      }, 100);
  });
};

const setValueAndTriggerEvent = (element, value) => {
  // Get React's internal setter
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;

  // Use the setter to properly update the value
  nativeInputValueSetter.call(element, value);

  // Dispatch events to ensure React updates state
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
  element.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }));
  element.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
};


(async () => {
  try {
      const usernameInput = await waitForElement('input[name="username"]');
      const passwordInput = await waitForElement('input[name="password"]');
      const submitButton = await waitForElement('button[type="submit"]');
      console.log("Elements found");
      setValueAndTriggerEvent(usernameInput, "admin@bassirah.local");
      setValueAndTriggerEvent(passwordInput, "UO678gf4oui0yQEt");
      submitButton.removeAttribute("disabled");
      submitButton.disabled = false;
     // submitButton.click();
  } catch (error) {
      console.error("Unexpected error:", error);
  }
})();
