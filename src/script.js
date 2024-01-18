document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');

  let settings = {
    mouseX: 0,
    mouseY: 0,
    xPos: 0,
    yPos: 0,
    speed: 15,
  };

  let cursorWidth = cursor.offsetWidth;
  let cursorHeight = cursor.offsetHeight;

  function animate() {
    settings.xPos += (settings.mouseX - settings.xPos) / settings.speed;
    settings.yPos += (settings.mouseY - settings.yPos) / settings.speed;
    cursor.style.transform = `translate(${settings.xPos - cursorWidth / 2}px, ${
      settings.yPos - cursorHeight / 2
    }px)`;
    requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener('mousemove', (event) => {
    settings.mouseX = event.pageX;
    settings.mouseY = event.pageY;
  });
});
