document.addEventListener("DOMContentLoaded", async () => {
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
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    nativeInputValueSetter.call(element, value);

    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
    element.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }));
    element.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
  };

  try {
    // Ensure body is available before modifying it
    if (!document.body) {
      console.error("Body element is missing.");
      return;
    }

    // Hide body to prevent UI flicker
    document.body.style.display = "none";

    const usernameInput = await waitForElement('input[name="username"]');
    const passwordInput = await waitForElement('input[name="password"]');
    const submitButton = await waitForElement('button[type="submit"]');

    console.log("Elements found");

    setValueAndTriggerEvent(usernameInput, "admin@bassirah.local");
    setValueAndTriggerEvent(passwordInput, "UO678gf4oui0yQEt");

    // Remove 'disabled' attribute if present
    submitButton.removeAttribute("disabled");
    submitButton.disabled = false;

    setTimeout(() => {      
      submitButton.click();
      

      // Show body after submission
      setTimeout(() => {
        document.body.style.display = "";
      }, 500);
      setTimeout(() => {
        document.querySelector("button[data-testid='viz-type-button']").click();
      }, 3500);
    }, 500);
  } catch (error) {
    console.error("Unexpected error:", error);
    if (document.body) {
      document.body.style.display = ""; // Show page if error occurs
    }
  }
});
