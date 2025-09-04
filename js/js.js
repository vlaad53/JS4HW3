const imgObServer = new IntersectionObserver((entris, observer) => {
    entris.forEach(elem => {
        if (elem.isIntersecting) {
            elem.target.src = elem.target.dataset.src;
            elem.target.style.transform = "rotate(0deg)"
            observer.unobserve(elem.target)
        }
    }) 
})

document.querySelectorAll("img").forEach((img) => imgObServer.observe(img));