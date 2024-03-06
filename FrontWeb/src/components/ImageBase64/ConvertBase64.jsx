

const convertBase64 = (base64Image) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = base64Image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Define el nuevo tamaño de la imagen
      const maxWidth = 500;
      const maxHeight = 300;
      let newWidth = img.width;
      let newHeight = img.height;

      // Redimensiona la imagen proporcionalmente
      if (img.width > maxWidth) {
        newWidth = maxWidth;
        newHeight = (img.height * maxWidth) / img.width;
      }
      if (img.height > maxHeight) {
        newHeight = maxHeight;
        newWidth = (img.width * maxHeight) / img.height;
      }

      // Dibuja la imagen redimensionada en el lienzo
      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Obtiene la imagen redimensionada en formato base64
      const resizedBase64 = canvas.toDataURL("image/jpeg");

      resolve(resizedBase64);
    };
    img.onerror = (error) => {
      reject(error);
    };
  });
};

export default convertBase64;

