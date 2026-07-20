# AZ Portfolio

趣味で作った個人開発アプリの作品集サイトです。

## 構成

- **ヘッダー** — 名前とキャッチコピー
- **作品一覧** — 横長カード（左：画像 / 右：アプリ名・紹介文）
- **プロフィール** — 自己紹介とリンク

## 開発

```bash
npm install
npm run dev
```

## カスタマイズ

### プロフィール・キャッチコピー

`src/data/profile.ts` を編集してください。

```ts
export const profile = {
  name: 'AZ',
  catchphrase: '思いついたものを、形にしていく。',
  bio: '...',
  links: [
    { label: 'GitHub', url: 'https://github.com/yourname' },
  ],
}
```

### 作品の追加・編集

`src/data/projects.ts` を編集してください。

```ts
{
  id: 'my-app',
  name: 'アプリ名',
  description: '簡単な紹介文',
  image: '/projects/my-app.png',  // public/projects/ に画像を置く
  url: 'https://...',             // 任意
  tags: ['React', 'TypeScript'],  // 任意
}
```

スクリーンショットは `public/projects/` フォルダに配置し、`image` には `/projects/ファイル名` の形式で指定します。

## ビルド・デプロイ

```bash
npm run build
```

`dist/` フォルダが生成されます。GitHub Pages や Vercel などにそのままデプロイできます。

## カラー

メインカラー: `#9ce6ac`（`src/index.css` の `--primary` で変更可能）
