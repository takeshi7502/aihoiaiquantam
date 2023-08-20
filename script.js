let a = document.querySelector('#switcher');
            a.onclick = () => {
                let e = document.querySelector('#main');
                if (e.classList.contains('light')) {
                    e.classList.remove('light');
                    e.classList.add('dark');
                    document.querySelector('#moon').style.display = 'none';
                    document.querySelector('#sun').style.display = 'unset';
                }
                else {
                    e.classList.remove('dark');
                    e.classList.add('light');
                    document.querySelector('#moon').style.display = 'unset';
                    document.querySelector('#sun').style.display = 'none';
                }
            }
            document.querySelector('#moon').style.display = 'none';