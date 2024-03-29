import React from "react";
import Button from "../../../uiKit/Atoms/Button/Button";
import Title from "../../../uiKit/Atoms/Title/Title";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import "../../../App.scss";
// import withReactContent from 'sweetalert2-react-content'

// PROTOTIPADO SEGÚN FIGMA

const SuccesModal = (e) => {
  e.preventDefault();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    iconColor: "#0f0f0f",
    color:"#0f0f0f",
    background:"#22bc22",
    padding:"0.8rem",
    title: "La clase fue agendada correctamente.",
  });
};

const ErrorModal = (e) => {
  e.preventDefault();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "error",
    iconColor: "#0f0f0f",
    color:"#0f0f0f",
    background:"#ff3333",
    padding:"0.8rem",
    title: "Te faltan ingresar algunos campos.",
  });
};

// ICONS FOR MODALS

const SuccessAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "success",
    showCloseButton: true,
    focusConfirm: true,
    showConfirmButton: false,
  });
};

const ErrorAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "error",
    showCloseButton: true,
    focusConfirm: true,
    showConfirmButton: false,
  });
};

const InfoAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "info",
    showCloseButton: true,
    focusConfirm: true,
    showConfirmButton: false,
  });
};

const QuestionAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "question",
    showCloseButton: true,
    focusConfirm: true,
    showConfirmButton: false,
  });
};

const WarningAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "warning",
    showCloseButton: true,
    focusConfirm: true,
    showConfirmButton: false,
  });
};

// TYPES FOR BUTTON OR LINKS

const FooterAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    icon: "question",
    footer: '<a href="">Deescripción del reedireccionamiento</a>',
  });
};

const LikeAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "<strong>Titulo</strong>",
    icon: "info",
    html:
      "Texto <b>texto en negrita</b>, " +
      '<a href="">links</a> ' +
      "otro texto",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Me Gusta!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
  });
};

const SaveAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Titulo del modal",
    text: "Información adicional",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    denyButtonText: `No Guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Fue Guardado con éxito", "", "success");
    } else if (result.isDenied) {
      Swal.fire("No se guardaron los cambios", "", "info");
    }
  });
};

// TYPES FOR POSITIONS

const TopEndAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Titulo del modal",
    showConfirmButton: false,
    timer: 1500,
  });
};

const TopStartAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Titulo del modal",
    showConfirmButton: false,
    timer: 1500,
  });
};

const BottomEndAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "Titulo del modal",
    showConfirmButton: false,
    timer: 1500,
  });
};

const BottomStartAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    position: "bottom-start",
    icon: "success",
    title: "Titulo del modal",
    showConfirmButton: false,
    timer: 1500,
  });
};

const ConfirmAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Titulo del modal",
    text: "Descripción adicional",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("¡Confirmado!", "Fue confirmado con éxito", "success");
    }
  });
};

// TYPES INPUTS

const TextInputAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      return fetch(`//api.github.com/users/${login}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .catch((error) => {
          Swal.showValidationMessage(`Request failed: ${error}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url,
      });
    }
  });
};

const EmailInputAlert = (e) => {
  e.preventDefault();
  const { value: email } = Swal.fire({
    title: "Input email address",
    input: "email",
    inputLabel: "Your email address",
    inputPlaceholder: "Enter your email address",
  });

  if (email) {
    Swal.fire(`Entered email: ${email}`);
  }
};

const UrlInputAlert = (e) => {
  e.preventDefault();
  const { value: url } = Swal.fire({
    input: "url",
    inputLabel: "URL address",
    inputPlaceholder: "Enter the URL",
  });

  if (url) {
    Swal.fire(`Entered URL: ${url}`);
  }
};

const PswInputAlert = (e) => {
  e.preventDefault();
  const { value: password } = Swal.fire({
    title: "Enter your password",
    input: "password",
    inputLabel: "Password",
    inputPlaceholder: "Enter your password",
    inputAttributes: {
      maxlength: 10,
      autocapitalize: "off",
      autocorrect: "off",
    },
  });

  if (password) {
    Swal.fire(`Entered password: ${password}`);
  }
};

const TextareaInputAlert = (e) => {
  e.preventDefault();
  const { value: text } = Swal.fire({
    input: "textarea",
    inputLabel: "Message",
    inputPlaceholder: "Type your message here...",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });

  if (text) {
    Swal.fire(text);
  }
};

const SelectInputAlert = (e) => {
  e.preventDefault();
  const { value: fruit } = Swal.fire({
    title: "Select field validation",
    input: "select",
    inputOptions: {
      Fruits: {
        apples: "Apples",
        bananas: "Bananas",
        grapes: "Grapes",
        oranges: "Oranges",
      },
      Vegetables: {
        potato: "Potato",
        broccoli: "Broccoli",
        carrot: "Carrot",
      },
      icecream: "Ice cream",
    },
    inputPlaceholder: "Select a fruit",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === "oranges") {
          resolve();
        } else {
          resolve("You need to select oranges :)");
        }
      });
    },
  });

  if (fruit) {
    Swal.fire(`You selected: ${fruit}`);
  }
};

const RadioInputAlert = (e) => {
  e.preventDefault();
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "#ff0000": "Red",
        "#00ff00": "Green",
        "#0000ff": "Blue",
      });
    }, 1000);
  });

  const { value: color } = Swal.fire({
    title: "Select color",
    input: "radio",
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "You need to choose something!";
      }
    },
  });

  if (color) {
    Swal.fire({ html: `You selected: ${color}` });
  }
};

const CheckboxInputAlert = (e) => {
  e.preventDefault();
  const { value: accept } = Swal.fire({
    title: "Terms and conditions",
    input: "checkbox",
    inputValue: 1,
    inputPlaceholder: "I agree with the terms and conditions",
    confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && "You need to agree with T&C";
    },
  });

  if (accept) {
    Swal.fire("You agreed with T&C :)");
  }
};

const FileInputAlert = (e) => {
  e.preventDefault();
  const { value: file } = Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Upload your profile picture",
    },
  });

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target.result,
        imageAlt: "The uploaded picture",
      });
    };
    reader.readAsDataURL(file);
  }
};

const RangeInputAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "How old are you?",
    icon: "question",
    input: "range",
    inputLabel: "Your age",
    inputAttributes: {
      min: 8,
      max: 120,
      step: 1,
    },
    inputValue: 25,
  });
};

const MultiplesInputAlert = (e) => {
  e.preventDefault();
  const { value: formValues } = Swal.fire({
    title: "Multiple inputs",
    html:
      '<input id="swal-input1" class="swal2-input">' +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
};

// OTHERS

const StyleAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
  });
};

const ImgAlert = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Aqui va el Titulo",
    text: "Información adicional",
    imageUrl: "https://placeholder.pics/svg/300x1500",
    imageHeight: 1500,
    imageAlt: "Descripcion del atributo Alt",
  });
};

// LOADERS

const TimeLoaderAlert = (e) => {
  e.preventDefault();
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};

const LoaderAlert = (e) => {
  e.preventDefault();
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    timer: 2000,
    html: "I will close in <b></b> milliseconds.",
    timerProgressBar: true,
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};

const MixInAlert = (e) => {
  e.preventDefault();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
};

const DocsModals = () => {
  return (
    <section>
      <Title
        title="Docs Modals"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1 bb-1-silver"
      />
      <div className="ph-3">
        <h2>SWEETALERT 2</h2>
        <br />
        <br />
        <h3>PROTOTIPO DEL FIGMA</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <article className="succes-container">
            <Button classname="btn-close">
              <Icon className="icon-close" icon="ep:close-bold" />
            </Button>
            <Icon className="icon-modal rebote-5 " icon="akar-icons:face-very-happy" />
            <p>La clase fue agendada correctamente.</p>
          </article>

          <article className="error-container">
            <Button classname="btn-close">
              <Icon className="icon-close" icon="ep:close-bold" />
            </Button>
              <Icon
                className="icon-modal rebote-5 "
                icon="icon-park-outline:surprised-face-with-open-mouth"
              />
              <p>Te faltan ingresar algunos campos.</p>
          </article>
        </div>
        <br />
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={SuccesModal}
            classname="btn-padding"
            bgcolor="green"
            txtcolor="white"
          >
            Succes modal
          </Button>
          <Button
            onclick={ErrorModal}
            classname="btn-padding"
            bgcolor="red"
            txtcolor="white"
          >
            Error Modal
          </Button>
        </div>
        <br />
        <br />
        <h3>SYMBOLS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={SuccessAlert}
            classname="btn-padding"
            bgcolor="green"
            txtcolor="white"
          >
            Success
          </Button>
          <Button
            onclick={ErrorAlert}
            classname="btn-padding"
            bgcolor="red"
            txtcolor="white"
          >
            Error
          </Button>
          <Button
            onclick={WarningAlert}
            classname="btn-padding"
            bgcolor="yellow"
            txtcolor="white"
          >
            Warning
          </Button>
          <Button
            onclick={InfoAlert}
            classname="btn-padding"
            bgcolor="blue"
            txtcolor="white"
          >
            Info
          </Button>
          <Button
            onclick={QuestionAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Question
          </Button>
        </div>
        <br />
        <br />
        <h3>OPTIONS BUTTONS / FOOTER LINKS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={SaveAlert}
            classname="btn-padding"
            bgcolor="blue"
            txtcolor="white"
          >
            Save Button
          </Button>
          <Button
            onclick={ConfirmAlert}
            classname="btn-padding"
            bgcolor="blue"
            txtcolor="white"
          >
            Confirm and Cancel
          </Button>
          <Button
            onclick={FooterAlert}
            classname="btn-padding"
            bgcolor="blue"
            txtcolor="white"
          >
            With Footer
          </Button>
          <Button
            onclick={LikeAlert}
            classname="btn-padding"
            bgcolor="blue"
            txtcolor="white"
          >
            Like and Dislike
          </Button>
        </div>
        <br />
        <br />
        <h3>OPTIONS INPUTS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={TextInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Text
          </Button>
          <Button
            onclick={EmailInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Email
          </Button>
          <Button
            onclick={UrlInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Url
          </Button>
          <Button
            onclick={PswInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Password
          </Button>
          <Button
            onclick={TextareaInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Textarea
          </Button>
          <Button
            onclick={SelectInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Select
          </Button>
          <Button
            onclick={RadioInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Radio
          </Button>
          <Button
            onclick={CheckboxInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Checkbox
          </Button>
          <Button
            onclick={FileInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            File
          </Button>
          <Button
            onclick={RangeInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Range
          </Button>
          <Button
            onclick={MultiplesInputAlert}
            classname="btn-padding"
            bgcolor="gray"
            txtcolor="white"
          >
            Multiples
          </Button>
        </div>
        <br />
        <br />
        <h3>OPTIONS LOADERS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={TimeLoaderAlert}
            classname="btn-padding"
            bgcolor="green"
            txtcolor="white"
          >
            Time Loader
          </Button>
          <Button
            onclick={LoaderAlert}
            classname="btn-padding"
            bgcolor="green"
            txtcolor="white"
          >
            Loader
          </Button>
          <Button
            onclick={MixInAlert}
            classname="btn-padding"
            bgcolor="green"
            txtcolor="white"
          >
            Mix In
          </Button>
        </div>
        <br />
        <br />
        <h3>POSITIONS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={TopEndAlert}
            classname="btn-padding"
            bgcolor="orange"
            txtcolor="white"
          >
            Top End
          </Button>
          <Button
            onclick={TopStartAlert}
            classname="btn-padding"
            bgcolor="orange"
            txtcolor="white"
          >
            Top Start
          </Button>
          <Button
            onclick={BottomEndAlert}
            classname="btn-padding"
            bgcolor="orange"
            txtcolor="white"
          >
            Bottom End
          </Button>
          <Button
            onclick={BottomStartAlert}
            classname="btn-padding"
            bgcolor="orange"
            txtcolor="white"
          >
            Bottom Start
          </Button>
        </div>
        <br />
        <br />
        <h3>OTHERS</h3>
        <br />
        <div className="d-grid g-1 gt-columns-200-1 ji-start ai-start ac-center">
          <Button
            onclick={ImgAlert}
            classname="btn-padding"
            bgcolor="black"
            txtcolor="white"
          >
            With Image
          </Button>
          <Button
            onclick={StyleAlert}
            classname="btn-padding"
            bgcolor="black"
            txtcolor="white"
          >
            Background
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocsModals;

// const SuccessAlert = withReactContent(Swal)
// const QuestionAlert = withReactContent(Swal)
// const InfoAlert = withReactContent(Swal)
// const ErrorAlert = withReactContent(Swal)
// const WarningAlert = withReactContent(Swal)

// SuccessAlert.fire({
//   title: <strong>Aqui va el Titulo</strong>,
//   html: <i>Información / estructura / componente adicional</i>,
//   confirmButtonText: 'Aceptar',
//   icon: 'success'
// })

// QuestionAlert.fire({
//   title: <strong>Aqui va el Titulo</strong>,
//   html: <i>Información / estructura / componente adicional</i>,
//   confirmButtonText: 'Aceptar',
//   icon: 'question'
// })

// InfoAlert.fire({
//   title: <strong>Aqui va el Titulo</strong>,
//   html: <i>Información / estructura / componente adicional</i>,
//   confirmButtonText: 'Aceptar',
//   icon: 'info'
// })

// ErrorAlert.fire({
//   title: <strong>Aqui va el Titulo</strong>,
//   html: <i>Información / estructura / componente adicional</i>,
//   confirmButtonText: 'Aceptar',
//   icon: 'error'
// })

// WarningAlert.fire({
//   title: <strong>Aqui va el Titulo</strong>,
//   html: <i>Información / estructura / componente adicional</i>,
//   confirmButtonText: 'Aceptar',
//   icon: 'warning'
// })
