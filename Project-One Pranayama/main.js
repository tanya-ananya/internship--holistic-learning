document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
      const target = button.getAttribute('data-target');
      let url;
  
      switch (target) {
        case 'pranayama':
          url = 'main.html';
          break;
        case 'asanas':
          url = 'asanas.html';
          break;
        case 'teaching-methodology':
          url = 'methodology.html';
          break;
        case 'anatomy':
          url = 'anatomy.html';
          break;
        case 'bandhas':
          url = 'bandhas.html';
          break;
        case 'practicum':
          url = 'practicum.html';
          break;
        case 'daily-schedule':
          url = 'schedule.html';
          break;
      }
  
      if (url) {
        location.href = url;
      }
    });
  });
  