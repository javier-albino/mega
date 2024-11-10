const getCategorias = async () => {
    try {
      const response = await fetch('http://localhost:8080/categorias/listar', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Error al obtener las categorías');
      return await response.json();
    } catch (error) {
      console.error('Error en getCategorias:', error);
      return [];
    }
  };
  
  export { getCategorias };
  