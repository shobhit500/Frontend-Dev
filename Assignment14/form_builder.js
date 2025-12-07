// FormBuilder class to generate form dynamically
class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  // Create form using innerHTML
  render(containerId) {
    const container = document.getElementById(containerId);
    let html = `<form id="dynamicForm">`;

    this.fields.forEach(field => {
      html += `
        <label>${field.label}</label>
        <input type="${field.type}" name="${field.label}" />
        <br>
      `;
    });

    html += `<button type="button" id="submitBtn">Submit</button></form>`;
    container.innerHTML = html;

    // Submit event
    document.getElementById("submitBtn").addEventListener("click", () => {
      console.log(this.getFormData());
    });
  }

  // Return form values as an object
  getFormData() {
    const data = {};
    const form = document.getElementById("dynamicForm");

    this.fields.forEach(field => {
      data[field.label] = form.elements[field.label].value;
    });

    return data;
  }
}

// Sample usage
const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" }
];

const builder = new FormBuilder(fields);
builder.render("formContainer");  // <div id="formContainer"></div> in HTML
