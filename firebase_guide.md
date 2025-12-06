# Firebase App Hosting デプロイガイド

Firebase App Hosting は Next.js などのフレームワークに最適化された最新のサーバーレスホスティングです。
この構成では、**GitHub リポジトリとの連携が必須**となります。以下の手順に従ってデプロイを行ってください。

## ✅ 前提条件
- GitHub アカウントを持っていること
- Google アカウント（Firebase利用）を持っていること
- ローカルに Git がインストールされていること

---

## ステップ 1: GitHub リポジトリの準備

Firebase App Hosting は GitHub の変更を検知して自動デプロイします。まずはコードを GitHub にアップロードします。

### 1-1. リポジトリの作成
1. [GitHub Repositories](https://github.com/new) にアクセスします。
2. **Repository name** に `digital-guild-mvp`（または任意の名前）を入力します。
3. **Public** または **Private** を選択します（どちらでも構いません）。
4. **Create repository** をクリックします。

### 1-2. ローカルコードのプッシュ
ターミナルで以下のコマンドを順に実行し、作成したリポジトリにコードをプッシュします。
※ `[YOUR_USERNAME]` 部分はご自身の GitHub ユーザー名に置き換えてください。

```bash
# Gitの初期化（まだの場合）
git init

# 全ファイルをステージング
git add .

# コミット作成
git commit -m "Initial commit for App Hosting"

# ブランチ名を main に変更
git branch -M main

# リモートリポジトリを追加
git remote add origin https://github.com/[YOUR_USERNAME]/digital-guild-mvp.git

# プッシュ
git push -u origin main
```

---

## ステップ 2: Firebase App Hosting の設定

### 2-1. プロジェクトの作成
1. [Firebase Console](https://console.firebase.google.com/) にアクセスします。
2. **「プロジェクトを追加」** をクリックし、画面の指示に従ってプロジェクトを作成します（Google Analyticsはオフでも構いません）。

### 2-2. App Hosting の開始
1. プロジェクトの左メニューから **「構築」 > 「App Hosting」** を選択します。
2. **「始める」** ボタンをクリックします。

### 2-3. GitHub との接続
1. **「GitHub に接続」** ステップで、GitHub アカウントを連携します。
2. 先ほど作成したリポジトリ (`digital-guild-mvp`) を選択します。
3. 「デプロイ設定」はデフォルトのままで **「次へ」** をクリックします。
   - **ルートディレクトリ**: `/` (デフォルト)
   - **ライブブランチ**: `main` (デフォルト)

### 2-4. デプロイの完了
1. **「完了」** をクリックすると、初回のロールアウト（ビルドとデプロイ）が開始されます。
2. ダッシュボードに表示されるドメイン（例: `https://digital-guild-mvp--xyz.us-central1.hosted.app`）にアクセスして動作を確認します。

---

## 🛠 設定ファイルについて
このプロジェクトには、App Hosting 用の推奨設定が含まれています。

- **`apphosting.yaml`**: サーバーのリソース設定（CPU, メモリなど）が記述されています。
- **`next.config.ts`**: `output: 'standalone'` が設定されており、コンテナ化に最適化されています。
- **`package.json`**: `engines` フィールドで Node.js バージョンを指定しています。

## ⚠️ 注意事項
- **データベース**: このデモはデータベースを使用していません。デプロイ後もデータはページリロードごとにリセットされます。
- **環境変数**: APIキーなどが必要になった場合は、`apphosting.yaml` または Firebase Console の「設定」から環境変数を追加してください。
