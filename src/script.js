document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[data-email]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            const address = this.getAttribute('data-email');
            const subject = this.getAttribute('data-subject') || 'Zapytanie o kurs';

            if (!address) {
                return;
            }

            event.preventDefault();
            window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}`;
        });
    });
});
