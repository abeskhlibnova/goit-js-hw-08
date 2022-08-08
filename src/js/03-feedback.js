import throttle from "lodash.throttle";

const refs = {
feedbackForm: document.querySelector(".feedback-form"),
emailInput: document.querySelector("input[type=email]"),
textarea: document.querySelector(".feedback-form textarea"),
}

const LOCALSTORAGE_INPUT_KEY = "feedback-form-state";

refs.feedbackForm.addEventListener("submit", throttle(onFeedbackFormSubmit, 500));
refs.feedbackForm.addEventListener("input", onTextareaInput);

updateInput();

function onFeedbackFormSubmit(e) {
    e.preventDefault();

    const email = refs.emailInput.value;
    const message = refs.textarea.value;

    localStorage.setItem(LOCALSTORAGE_INPUT_KEY,  JSON.stringify({ email, message }));
    console.log(localStorage.getItem(LOCALSTORAGE_INPUT_KEY));
    refs.feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_INPUT_KEY);
};


function onTextareaInput(e) {
    e.preventDefault();

    const email = refs.emailInput.value;
    const message = refs.textarea.value;
    localStorage.setItem(LOCALSTORAGE_INPUT_KEY, JSON.stringify({ email, message }));
};


function updateInput() {
    const formParse = JSON.parse(localStorage.getItem(LOCALSTORAGE_INPUT_KEY)) ;
    
    if(formParse) {
        refs.feedbackForm.elements.email.value = formParse.email;
        refs.feedbackForm.elements.message.value = formParse.message;
    }  
};

