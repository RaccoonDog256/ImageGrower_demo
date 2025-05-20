# ImageGrower\_demo

**ImageGrower\_demo** は、画面下から画像がポップアップで表示される挙動を確認できる React アプリケーション兼 Chrome 拡張機能のデモです。

---

## 特徴

* 任意の画像をアップロードして表示可能
* 画像が下から生えてくるアニメーション
* React + TailwindCSS による UI

---

## デモ動画

[![ImageGrower\_demo](./screenshots/ImageGrower_demo.gif)]

## セットアップと起動方法

### クローン & パッケージインストール

```bash
git clone https://github.com/RaccoonDog256/ImageGrower_demo.git
cd ImageGrower_demo
npm install
```

### 開発サーバー起動

```bash
npm start
```

ブラウザで `http://localhost:3000` を開いて確認できます。

---

## 使い方

1. `npm start` でローカル開発サーバーを起動
2. 画像アップロードボタンから画像を選択
3. 「画像をポップアップ」ボタンで、ページ上に画像が表示されます
4. アップロード済み画像は一覧から確認可能

---

## 技術構成

* React
* Tailwind CSS

---

## ディレクトリ構成

```
ImageGrower_demo/
├── public/
│   ├── rakko.png
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
├── manifest.json
├── popup.html
├── popup.js
├── content.js
```
