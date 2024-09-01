document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const img1 = document.querySelector('.img1');
    const head1 = document.querySelector('.head1');
    const para1 = document.querySelector('.para1');

    const contentData = {
        2018: {
            imgSrc: './logo.jpeg', // Update with correct path if different
            heading: 'April 2018',
            text: `We are one of India's leading drone firms in providing end-to-end Drone Solutions.`
        },
        2019: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2019',
            text: `Details for April 2019`
        },
        2020: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2020',
            text: `Details for April 2020`
        },
        2021: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2021',
            text: `Details for April 2021`
        },
        2022: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2022',
            text: `Details for April 2022`
        },
        2023: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2023',
            text: `Details for April 2023`
        },
        2024: {
            imgSrc: './logo.jpeg', // Update with another image if needed
            heading: 'April 2024',
            text: `Details for April 2024`
        },
    };

    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            const year = this.getAttribute('data-year');
            if (contentData[year]) {
                img1.src = contentData[year].imgSrc;
                head1.textContent = contentData[year].heading;
                para1.innerHTML = contentData[year].text.split('\n').join('</br>');
                
                // Remove active class from all items and add it to the clicked one
                timelineItems.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
