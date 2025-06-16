function updateBannerHeight() {
    const img = document.getElementById('bg-img');
    const banner = document.getElementById('banner');
    
    if (img && banner) {
      banner.style.minHeight = img.offsetHeight + 'px';
    }
  }

  window.addEventListener('load', updateBannerHeight);
  window.addEventListener('resize', updateBannerHeight);
