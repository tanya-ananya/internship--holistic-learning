document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.button-container');
  
  container.addEventListener('click', function(event) {
    const button = event.target.closest('.btn');
    if (!button) return;

    const target = button.getAttribute('data-target');
    const urls = {
      'pranayama': 'index.html',
      'asanas': 'asana.html',
      'teaching-methodology': 'methodology.html',
      'anatomy': 'anatomy.html',
      'bandhas': 'bandhas.html',
      'practicum': 'practicum.html',
      'daily-schedule': 'schedule.html'
    };

    const url = urls[target];
    if (url) {
      location.href = url;
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.button-container');
  
  container.addEventListener('click', function(event) {
    const button = event.target.closest('.btn');
    if (!button) return;

    const target = button.getAttribute('data-target');
    const urls = {
      'pranayama': 'index.html',
      'asanas': 'asana.html',
      'teaching-methodology': 'methodology.html',
      'anatomy': 'anatomy.html',
      'bandhas': 'bandhas.html',
      'practicum': 'practicum.html',
      'daily-schedule': 'schedule.html'
    };

    const url = urls[target];
    if (url) {
      location.href = url;
    }
  });
});
