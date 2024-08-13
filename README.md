# Population Trends of Japan

## Developer Quick Start

Prerequisite: Node.js (recommended v20)

1. Uninstall yarn or pnpm for corepack (if installed), and install corepack

You can skip this step if you have already installed corepack.

```shell
npm uninstall -g yarn pnpm
npm install -g corepack
```

2. Install necessary packages

```shell
pnpm install
```

### Available Commands

#### Dev Mode (hot reload)

```shell
pnpm dev
```

#### Build

```shell
pnpm build
```

## ディレクトリ構造

- src: ソースコード
  - components: 一般のコンポーネント
  - const: API keyなどのグローバル定数周り
  - router: ルーティング周り
  - type: 型定義周り
  - views: route直下のコンポーネント
  - App.vue
  - main.ts

## コンポーネント依存関係

- MainView.vue
  - CheckBoxes.vue
    - CheckBox.vue
  - DisplayOptions.vue
    - RadioButton.vue
  - ChartComponent.vue
