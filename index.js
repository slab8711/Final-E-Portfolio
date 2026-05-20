function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('modal__overlay--loading');
    const success = document.querySelector('modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
           "service_o9jk7wn",
           "template_6acvoan",
          event.target,
            "9c2Kbb_GUnDNBUzmq"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
            "This email is temporarily unavailable. Please contact me directly on scottlab8711@gmail.com"
            );
        })
}
