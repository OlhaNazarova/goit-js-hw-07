const refs = {
    form: document.querySelector(".login-form"),
  };
  
  refs.form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const input = e.target.elements;
  
    if (!input.email.value || !input.password.value) {
      alert("Всі поля мають бути заповненні!");
    } else {
      const userObj = {
        email: input.email.value,
        password: input.password.value,
      };
      refs.form.reset();
      console.log(userObj);
    }
  });
