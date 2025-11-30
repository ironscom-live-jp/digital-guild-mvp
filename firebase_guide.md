# Firebase App Hosting デプロイガイド

Firebase App Hosting は Next.js などのフレームワークに最適化された新しいホスティングサービスです。
利用には **GitHub リポジトリとの連携** が必須となります。

## 手順 1: Git設定の完了（必須）

先ほどエラーになったGitの設定を完了させます。ターミナルで以下を実行してください（ご自身の名前とメールアドレスを入れてください）。

```bash
git config --global user.name "Taro Yamada"
git config --global user.email "taro@example.com"
```

設定ができたら、コミットを行います。

```bash
git commit -m "Initial MVP release"
```

## 手順 2: GitHubへのプッシュ

1. [GitHub](https://github.com/new) で新しいリポジトリを作成（例: `digital-guild-mvp`）。
2. 表示されたコマンドを実行してプッシュ。

```bash
git remote add origin https://github.com/[ユーザー名]/digital-guild-mvp.git
git branch -M main
git push -u origin main
```

## 手順 3: Firebase App Hosting の設定

1. [Firebase Console](https://console.firebase.google.com/) にアクセスし、プロジェクトを作成（または選択）。
2. 左メニューの「App Hosting」を選択し、「始める」をクリック。
3. GitHubアカウントを接続し、先ほどのリポジトリ (`digital-guild-mvp`) を選択。
4. 設定はそのままで「デプロイ」をクリック。

---

## （代替案）GitHubを使わない場合：Firebase Hosting (Classic)

どうしてもGitHubを使いたくない場合は、従来のFirebase Hostingを使います。ただし、Next.jsの機能（SSRなど）をフルに使うには設定が複雑になる場合があります。

```bash
firebase experiments:enable webframeworks
firebase init hosting
firebase deploy
```
