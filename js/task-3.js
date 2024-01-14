const refs = {
    inputEl: document.querySelector("#name-input"),
    spanEl: document.querySelector("#name-output"),
  };
  
  refs.inputEl.addEventListener("input", onInputEl);
  
  function onInputEl(event) {
    refs.spanEl.textContent = event.currentTarget.value;
    if (!refs.spanEl.textContent) {
      refs.spanEl.textContent = "Anonymous";
    }
  }
  