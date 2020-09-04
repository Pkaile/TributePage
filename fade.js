
const sections = document.querySelectorAll(".fade");

const options = {
    threshold:0,
    rootMargin:"0% 0% -30% 0%"
};
const scrollObserver = new IntersectionObserver((entries, observer) =>{
entries.forEach(entry =>{
    if(entry.isIntersecting){
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
    } else {
        return;
    }
    });    
}, options);

sections.forEach(section => {
    scrollObserver.observe(section);
})
