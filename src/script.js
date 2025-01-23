const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
                if (rootElement.scrollTop / scrollTotal > 0.5) {
                    scrollToTopBtn.classList.add('show');
                    scrollToTopBtn.classList.remove('hide');
                } else {
                    scrollToTopBtn.classList.add('hide');
                    scrollToTopBtn.classList.remove('show');
                }
            }

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);
