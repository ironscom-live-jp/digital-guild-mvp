# クライアントへのMVP共有と継続的な改善のためのデプロイガイド

クライアントにMVPを共有し、かつ修正を即座に反映させるためには、**Vercel** と **GitHub** を組み合わせた構成が最も推奨されます。
Next.jsの開発元であるVercelを使うことで、設定不要で最高速のパフォーマンスと、GitHubにプッシュするつど自動で本番環境が更新される体験が得られます。

## 手順概要

1. **Gitの初期化とコミット** (ローカル)
2. **GitHubリポジトリの作成とプッシュ** (GitHub)
3. **Vercelへのデプロイ** (Vercel)

---

## 1. Gitの初期化 (私が代行可能です)

まず、現在のプロジェクトをGitで管理する必要があります。

```bash
git init
git add .
git commit -m "Initial MVP release"
```

## 2. GitHubリポジトリの作成

1. [GitHub](https://github.com/new) にアクセスし、新しいリポジトリを作成します（例: `digital-guild-mvp`）。
2. リポジトリ作成後に表示されるコマンドを使って、ローカルのコードをGitHubにプッシュします。

```bash
git remote add origin https://github.com/[あなたのユーザー名]/digital-guild-mvp.git
git branch -M main
git push -u origin main
```

## 3. Vercelへのデプロイ

1. [Vercel](https://vercel.com/new) にアクセスし、GitHubアカウントでログインします。
2. 「Import Git Repository」で、先ほど作成した `digital-guild-mvp` を選択し「Import」をクリックします。
3. 設定項目はそのままで「Deploy」をクリックします。

## これで実現できること

*   **共有URL**: `https://digital-guild-mvp.vercel.app` のようなURLが発行され、クライアントはいつでもどこでもアクセスできます。
*   **即時修正**: ローカルで修正を行い、`git push` するだけで、Vercelが自動的に検知し、数分以内に新しいバージョンがそのURLに反映されます。
*   **プレビュー機能**: 本番環境（mainブランチ）とは別に、開発中のブランチをプッシュすると、そのブランチ専用のプレビューURLが発行されます。本番に影響を与えずに修正案をクライアントに見せることも可能です。

---

## 代替案: 一時的な共有 (ngrok)

もしGitHubへのアップロードなどが手間で、「今動いているローカル環境をそのまま見せたい」だけであれば、`ngrok` などのトンネリングツールも有効です。ただし、PCを閉じると見られなくなるため、継続的なレビューには向きません。
