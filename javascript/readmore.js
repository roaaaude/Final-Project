function toggleVisibility() {
    var moreText = document.getElementsByClassName("remaining-content")[0];
    var buttonText = document.getElementsByClassName("button_text")[0];

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        buttonText.innerHTML = "תסתיר";
    } else {
        moreText.style.display = "none";
        buttonText.innerHTML = "הצג";
    }
}
