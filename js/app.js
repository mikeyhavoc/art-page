const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('li');
const faqs = accordion.querySelectorAll('.faqs');


function toggleAccordion () {
  const thisItem = this.parentNode;
  items.forEach(item => {
    if(thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });

};

faqs.forEach(faq => faq.addEventListener('click', toggleAccordion));