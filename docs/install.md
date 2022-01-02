# 项目环境准备

重新调整了一下 `leetcode-in-js` 仓库，配置了 `eslint`、`jtest`、`commitizen` 和 `husky`，目的只有一个：**给自己一个好的工作环境，每天进步一点点**。

具体操作步骤如下：

1. 初始化项目

   ```bash
   yarn init -y
   ```

2. 安装 [eslint](https://eslint.org/)

   ```bash
   yarn add -D eslint

   npx eslint --init
   ```

3. 修改 `.eslintrc.yml` 内容如下：

   ```yml
   env:
     browser: true
     es2021: true
     node: true
   extends:
     - 'plugin:@typescript-eslint/recommended'
   parser: '@typescript-eslint/parser'
   parserOptions:
     ecmaVersion: 12
     sourceType: moudle
   plugins:
     - '@typescript-eslint'
   rules:
     quotes:
       - error
       - single
     semi:
       - error
       - never
   ```

4. 安装 [jest](https://jestjs.io/)

   ```bash
   yarn add -D jest

   yarn add -D babel-jest @babel/core @babel/preset-env
   ```

5. 安装 [typescript](https://www.typescriptlang.org/)

   ```bash
   yarn add -D typescript

   yarn add -D @babel/preset-typescript @types/jest

   npx tsc --init
   ```

6. 新建 `babel.config.js`

   ```js
   module.exports = {
     presets: [
       ['@babel/preset-env',
         {
           targets: { node: 'current' }
         }
       ],
       '@babel/preset-typescript',
     ],
   }
   ```

7. 安装 [commitizen](https://github.com/commitizen/cz-cli)

   ```bash
   yarn add -D commitizen

   npx commitizen init cz-conventional-changelog --yarn --dev --exact
   ```

8. 生成 `.gitignore` 内容

   ```bash
   echo 'node_modules\ncoverage' >> .gitignore
   ```

9. 修改 `package.json` 添加 `scripts`

   ```js
   "scripts": {
     "lint": "eslint src --ext .js,.ts",
     "test": "jest",
     "coverage": "jest --coverage",
     "commit": "cz"
   }
   ```

10. 安装 [husky](https://github.com/typicode/husky)

    ```bash
    yarn add -D husky

    npx husky install

    npx husky add .husky/pre-commit "yarn lint"
    npx husky add .husky/pre-commit "yarn test"
    ```
