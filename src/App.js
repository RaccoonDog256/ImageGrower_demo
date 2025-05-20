import React, { useState } from "react";
import './index.css';

const RandomImagePopupDemo = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("ボタンをクリックして画像をアップロードしてください🌵");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setImages((prevImages) => [...prevImages, imageUrl]);
        createRandomImage(imageUrl);
      };
      reader.readAsDataURL(file);
      setMessage("画像をアップロードしました！🌵");
    }
  };

  const createRandomImage = (imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.position = "fixed";
    img.style.bottom = "-100px";
    img.style.left = `${Math.random() * 90}vw`;
    img.style.width = "100px";
    img.style.transition = "bottom 2s ease-out";

    document.body.appendChild(img);

    setTimeout(() => {
      img.style.bottom = "0";
      setTimeout(() => img.remove(), 3000);
    }, 100);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🌵ImageGrower デモ</h1>
      <p>{message}</p>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        style={{ display: "none" }} 
        id="imageUploader" 
      />
      <button onClick={() => document.getElementById("imageUploader").click()}>
        アップロード
      </button>

      <div className="mt-4">
        <h2>アップロードした画像</h2>
        <div className="image-list">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Uploaded ${index}`} style={{ width: "100px", margin: "4px" }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RandomImagePopupDemo;
