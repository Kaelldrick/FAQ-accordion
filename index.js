const faqItemInline = document.querySelectorAll(".faq-item__inline");
const faqItemAnswer = document.querySelectorAll(".faq-item__answer");
const faqItemIcon = document.querySelectorAll(".faq-item__icon");

faqItemInline.forEach((question, index) => {
    question.addEventListener("click", () => {
        faqItemAnswer.forEach((answer) => {
            if ((question.getAttribute("id")) === (answer.getAttribute("data-question"))) {
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    answer.style.opacity = 0;
                    faqItemIcon[index].setAttribute("src", "images/icon-plus.svg");
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = 1;
                    faqItemIcon[index].setAttribute("src", "images/icon-minus.svg");
                }
            }
        })
    })
})