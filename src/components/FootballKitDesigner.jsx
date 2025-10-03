import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

const FootballKitDesigner = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [baseImage, setBaseImage] = useState(null);

  // Initialiser le canvas
  useEffect(() => {
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
      backgroundColor: "#f0f0f0",
    });
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, []);

  // Charger l'image de base (maillot)
  const loadBaseImage = (src) => {
    fabric.Image.fromURL(src, (img) => {
      img.set({
        left: 0,
        top: 0,
        selectable: false, // 🔒 on ne peut pas bouger le maillot
        evented: false,    // 🔒 ignore les clics dessus
      });
      // Ajuster la taille à ton canvas (par exemple 400x500)
    img.scaleToWidth(canvas.getWidth());
    img.scaleToHeight(canvas.getHeight());
    canvas.centerObject(img);
    setBaseImage(img);
    // Ajouter la couleur de fond avec clipPath
    const overlay = new fabric.Rect({
      left: 0,
      top: 0,
      width: canvas.getWidth(),
      height: canvas.getHeight(),
      fill: currentColor, // <- ici tu mets la couleur choisie
      selectable: false,
      evented: false,
      clipPath: img, // ✅ la couleur reste à l'intérieur du maillot
    });
      

      // 🔥 Toujours garder le maillot visible au-dessus
      canvas.add(overlay);
    canvas.add(img); // ✅ remettre le maillot au-dessus
      canvas.renderAll();
    });
  };

  // Charger le maillot au démarrage
  useEffect(() => {
    if (canvas) {
      loadBaseImage("/images/maillot_avant.png");
    }
  }, [canvas]);

  // Appliquer une couleur ou motif sur le maillot
  const applyPatternToKit = (pattern) => {
    if (!canvas || !baseImage) return;

    // Supprimer anciens overlays
    canvas.getObjects().forEach((obj) => {
      if (obj.name === "color-overlay") {
        canvas.remove(obj);
      }
    });

    // Créer un overlay
    const overlay = new fabric.Rect({
      left: 0,
      top: 0,
      width: canvas.width,
      height: canvas.height,
      fill: pattern,
      selectable: false,
      evented: false,
      name: "color-overlay",
    });

    // 🎯 Appliquer uniquement sur la forme du maillot
    overlay.clipPath = baseImage;

    canvas.add(overlay);

    // Garder les contours/ombres du maillot visibles
    canvas.bringToFront(baseImage);

    canvas.renderAll();
  };

  // Changement de couleur
  const handleColorClick = (color) => {
    applyPatternToKit(color);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎨 Concepteur de Maillot de Football</h2>
      <canvas ref={canvasRef}></canvas>
      <div style={{ marginTop: "15px" }}>
        <button onClick={() => handleColorClick("red")}>Rouge</button>
        <button onClick={() => handleColorClick("blue")}>Bleu</button>
        <button onClick={() => handleColorClick("green")}>Vert</button>
        <button onClick={() => handleColorClick("black")}>Noir</button>
        <button onClick={() => handleColorClick("white")}>Blanc</button>
      </div>
    </div>
  );
};

export default FootballKitDesigner;