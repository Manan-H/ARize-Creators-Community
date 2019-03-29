const url = "./subscribe.php";
const submit = document.querySelector("#submit");


submit.addEventListener("click", e => {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;

  const data = new FormData();
  data.append('name', name);
  data.append('email', email);
  data.append('location', 'armenia');
  data.append('captcha', grecaptcha.getResponse());

  fetch(url, {
      method: 'POST',
      body: data
    }).then(res => {
      console.log(res);
      document.querySelector("#answer").innerHTML = res.json();
    })
    .catch(res => console.log(res));
})