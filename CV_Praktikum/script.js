document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.content-container').forEach(container => {
      container.style.display = 'none';
    });
    
    document.querySelectorAll('.gift-option').forEach(gift => {
      gift.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        openGift(target);
      });
      
      gift.addEventListener('mouseenter', function() {
        this.querySelector('.gift-lid').style.transform = 'translateY(-8px) rotate(-3deg)';
        this.querySelector('.gift-body').style.transform = 'translateY(5px) rotate(2deg)';
        this.querySelector('.gift-label').style.transform = 'translateY(5px)';
        this.querySelector('.gift-label').style.color = 'var(--primary)';
      });
      
      gift.addEventListener('mouseleave', function() {
        this.querySelector('.gift-lid').style.transform = '';
        this.querySelector('.gift-body').style.transform = '';
        this.querySelector('.gift-label').style.transform = '';
        this.querySelector('.gift-label').style.color = '';
      });
    });
  });
  
  function openGift(target) {
    const giftSelection = document.getElementById('giftSelection');
    const targetContainer = document.getElementById(target + 'Container');
    
    const giftBox = document.querySelector(`.gift-option[data-target="${target}"] .gift-box`);
    giftBox.classList.add('opening');
    
    setTimeout(function() {
      giftSelection.style.display = 'none';
      targetContainer.style.display = 'block';
      targetContainer.style.animation = 'fadeIn 0.8s ease-out forwards';
      
      window.scrollTo(0, 0);
    }, 800);
  }
  
  function showGiftSelection() {
    document.querySelectorAll('.content-container').forEach(container => {
      container.style.display = 'none';
    });
    
    const giftSelection = document.getElementById('giftSelection');
    giftSelection.style.display = 'block';
    
    document.querySelectorAll('.gift-box').forEach(box => {
      box.classList.remove('opening');
    });
    
    window.scrollTo(0, 0);
  }