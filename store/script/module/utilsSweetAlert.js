const ICONS_SA = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  QUESTION: 'question'
}

const showAlert = (title, text, icon, callback) => {
  Swal.fire({
    title,
    text,
    icon
  }).then((result) => {
    if (result.isConfirmed && callback) {
      callback();
    }
  });;
}

const showToast = (title, icon) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon,
    title
  });
}

const showConfirmDialog = (title, text, positiveCallback, negativeCallback) => {
  Swal.fire({
    title,
    text,
    icon: ICONS_SA.QUESTION,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed && positiveCallback) {
      positiveCallback();
    }
  });
}

export { ICONS_SA, showAlert, showToast, showConfirmDialog }
