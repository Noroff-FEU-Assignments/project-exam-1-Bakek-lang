import { showModal } from "../ui/modal_form.js";

const url =
  "https://code-corner.henrikbakke.no/wp-json/contact-form-7/v1/contact-forms/178/feedback";

export async function submitForm(name, email, subject, message) {
  try {
    const formData = new FormData();
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-subject", subject);
    formData.append("your-message", message);

    console.log(formData);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      showModal({
        contentType: "text",
        name: name,
      });
    } else {
      showModal(
        {
          contentType: "text",
          name: name,
        },
        false
      );
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
    showModal(
      {
        contentType: "text",
        name: name,
      },
      false
    );
  }
}
