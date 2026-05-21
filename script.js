function handleSubmit(e){
  e.preventDefault();
  // Replace with real endpoint or Formspree / Netlify forms
  const form = e.currentTarget;
  const data = {
    email: form.email.value,
    message: form.message.value
  };
  // Simple user feedback
  alert("Thanks! I received your message: " + JSON.stringify(data));
  form.reset();
}