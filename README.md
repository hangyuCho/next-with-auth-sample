# nextjs * nextjs auth を導入してみた件！
### 他のauthの設定と比べて割とシンプル。。助かる:)

```bash
# コマンド履歴(参考)
npx prisma migrate dev --name init
pnpm @prisma/client
pnpm i @prisma/client
npx prisma studio
pnpm i bcrypt
pnpm i --save-dev @types/bcrypt
pnpm i next-auth
```

```bash
# .env
DATABASE_URL=
```

```bash
pnpm dev
```
