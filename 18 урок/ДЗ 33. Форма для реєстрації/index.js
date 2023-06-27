const saveBtn = document.getElementById("button");
const form = document.getElementById("form");

saveBtn.addEventListener("click", function() {
  const nameInput = document.getElementById("name").value;
  const surnameInput = document.getElementById("surname").value;
  const birthdateInput = document.querySelector('#birthdate').value;
  const genderInput = document.querySelector('input[name="gender"]:checked').value;
  const cityInput = document.getElementById("city").value;
  const addressTextarea = document.querySelector('#address').value;
  const languageInputs = document.querySelectorAll('input[name="languages"]:checked');
  const languageValues = Array.from(languageInputs).map(languageInput => languageInput.value);

  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <td><b>Ім’я:</b></td>
      <td>${nameInput}</td>
    </tr>
    <tr>
      <td><b>Фамілія:</b></td>
      <td>${surnameInput}</td>
    </tr>
    <tr>
      <td><b>Дата народження:</b></td>
      <td>${birthdateInput}</td>
    </tr>
    <tr>
      <td><b>Стать:</b></td>
      <td>${genderInput}</td>
    </tr>
    <tr>
      <td><b>Місто:</b></td>
      <td>${cityInput}</td>
    </tr>
    <tr>
      <td><b>Адресса:</b></td>
      <td>${addressTextarea}</td>
    </tr>
    <tr>
      <td><b>Мови, якими володієте:</b></td>
      <td>${languageValues.join(', ')}</td>
    </tr>
  `;
  
  form.replaceWith(table);
});