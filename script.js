document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const desc = button.parentNode.nextElementSibling;
                const container = desc.parentNode.parentNode;
                const major = button.parentNode;
                const sectionP = major.querySelector('p');

                desc.classList.toggle('visible');
                button.classList.toggle('minus-sign');

                if (desc.classList.contains('visible')) {
                    desc.style.display = 'block';
                    button.textContent = '-';
                    desc.style.fontSize = '0.8rem'; 
                    subject.style.fontSize = '0.8rem';
                } else {
                    desc.style.display = 'none';
                    button.textContent = '+';
                    desc.style.fontSize = ''; 
                    subject.style.fontSize = '';
                }
            });
        });
    }
};
