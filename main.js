const questions = document.querySelectorAll('.accordion__question')

for (let qn of questions) {
    qn.addEventListener('click', function () {
        // Controller
        this.classList.toggle('active')
        if (this.classList.contains('active')) {
            this.setAttribute('aria-expanded', 'true')
        }

        // Collapse or Expand
        let ans = this.nextElementSibling
        if (ans.classList.contains("show")) {
            ans.classList.remove("show")
            ans.setAttribute('aria-hidden', 'true')
        } else {
            ans.classList.add("show")
            ans.setAttribute('aria-hidden', 'false')
        }

        // Collapse Others
        for (qn of questions) {
            if (qn != this) {
                qn.classList.remove("active")
                qn.setAttribute('aria-expanded', 'false')
                qn.nextElementSibling.classList.remove("show")
                qn.nextElementSibling.setAttribute('aria-hidden', 'true')
            }
        }
    })
}