document.querySelectorAll('.solution').forEach(sol => {
    const id = sol.dataset.id;
  
    sol.querySelector('.accept').addEventListener('click', () => {
      localStorage.setItem('solucion_${id}', 'aceptada');
      showAutoAlert(`Has aceptado la solución ${id}.`);
    });
  
    sol.querySelector('.reject').addEventListener('click', () => {
      localStorage.setItem('solucion_${id}', 'rechazada');
      sol.remove();
      showAutoAlert(`Has rechazado la solución ${id} y ha sido eliminada.`);
    });
  });
  
  /**
   * Muestra un cuadro tipo alert que se cierra solo tras 3 segundos.
   */
  function showAutoAlert(text) {
    // Crear el contenedor
    const box = document.createElement('div');
    box.textContent = text;
    Object.assign(box.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      zIndex: 10000,
      fontFamily: 'sans-serif'
    });
  
    document.body.appendChild(box);
  
    // Desaparece tras 3 segundos
    setTimeout(() => {
      box.remove();
    }, 3000);
  }
  