# Folder Alias Fixed - 文件夹别名插件

一个为VSCode文件资源管理器添加文件夹和文件别名标注的实用插件，帮助您更好地识别和组织代码项目。

![演示动图](./docs/images/simple.gif)

## ✨ 功能特性

- 🏷️ **文件夹别名标注**：为文件夹和文件添加自定义别名，在文件树中显示
- 🎯 **右键菜单集成**：通过右键菜单快速添加或修改别名
- 💾 **配置文件管理**：别名配置保存在工作区的 `.vscode/folder-alias.json` 文件中
- 🔄 **实时更新**：别名修改后立即在文件树中生效
- 🌐 **多工作区支持**：支持多个工作区同时使用
- 📝 **工具提示**：鼠标悬停显示详细信息

## 📦 安装方法

### 方法一：从VSCode扩展市场安装
1. 打开VSCode
2. 点击左侧活动栏的"扩展"图标（或按 `Ctrl+Shift+X`）
3. 搜索 "Folder Alias Fixed"
4. 点击"安装"按钮
5. 重启VSCode（如需要）

### 方法二：手动安装
1. 下载 `.vsix` 插件包
2. 在VSCode中按 `Ctrl+Shift+P` 打开命令面板
3. 输入 "Extensions: Install from VSIX..."
4. 选择下载的 `.vsix` 文件进行安装

## 🚀 使用方法

### 添加别名
1. 在文件资源管理器中，右键点击要添加别名的文件夹或文件
2. 从右键菜单中选择 "Add Alias"（添加别名）
3. 在弹出的输入框中输入您想要的别名
4. 按回车键确认，别名将立即显示在文件树中

### 修改别名
1. 右键点击已有别名的文件夹或文件
2. 选择 "Add Alias"
3. 修改输入框中的别名内容
4. 按回车键保存修改

### 删除别名
1. 右键点击有别名的文件夹或文件
2. 选择 "Add Alias"
3. 清空输入框内容
4. 按回车键确认删除

## ⚙️ 配置文件

插件会在每个工作区的 `.vscode` 目录下创建以下配置文件：

- `folder-alias.json`：公共别名配置（可提交到版本控制）
- `private-folder-alias.json`：私有别名配置（建议添加到 .gitignore）

### 配置文件格式示例
```json
{
  "src/components": {
    "description": "🧩 组件库",
    "tooltip": "React组件库目录"
  },
  "src/utils": {
    "description": "🛠️ 工具函数",
    "tooltip": "通用工具函数库"
  }
}
```

## 🎨 使用技巧

1. **使用表情符号**：在别名中使用表情符号让文件树更加直观
   - 📁 文件夹
   - 🧩 组件
   - 🛠️ 工具
   - 📝 文档
   - ⚙️ 配置

2. **简短明了**：别名应该简短明了，避免过长影响显示效果

3. **统一规范**：在团队项目中建议制定统一的别名命名规范

## 📋 系统要求

- VSCode 版本：1.100.0 或更高
- 操作系统：Windows、macOS、Linux

## 🛠️ 开发与构建

### 环境要求
- Node.js 18+
- npm 或 pnpm
- VSCode 1.100.0+

### 从源码构建插件

如果您想从源码构建插件，请按照以下步骤操作：

#### 1. 克隆项目
```bash
git clone https://github.com/Peaceful-World-X/folder-alias-fixed.git
cd folder-alias-fixed
```

#### 2. 安装依赖
```bash
# 使用 npm（推荐，支持国内镜像）
npm install --registry https://registry.npmmirror.com

# 或使用 pnpm
pnpm install
```

#### 3. 编译源代码
```bash
# 编译 TypeScript 到 JavaScript
npm run build
```

#### 4. 打包生成插件
```bash
# 生成 .vsix 插件包
npm run pack
```

#### 5. 安装插件
编译完成后，会在项目根目录生成 `folder-alias-fixed-0.1.2.vsix` 文件：

**方法一：VSCode 命令安装**
1. 在 VSCode 中按 `Ctrl+Shift+P` 打开命令面板
2. 输入 "Extensions: Install from VSIX..."
3. 选择生成的 `.vsix` 文件进行安装

**方法二：命令行安装**
```bash
code --install-extension folder-alias-fixed-0.1.2.vsix
```

### 项目结构
```
folder-alias-fixed/
├── src/                    # TypeScript 源代码
│   ├── index.ts           # 插件入口文件
│   ├── file-alias.ts      # 文件别名核心功能
│   ├── command/           # 命令处理
│   ├── hooks/             # 配置管理钩子
│   └── utils/             # 工具函数
├── dist/                  # 编译后的 JavaScript 文件
├── media/                 # 图标资源
├── package.json           # 项目配置
└── folder-alias-fixed-0.1.2.vsix  # 生成的插件包
```

### 开发脚本说明
- `npm run build` - 编译 TypeScript 源代码
- `npm run pack` - 打包生成 VSCode 插件
- `npm run vscode:prepublish` - 发布前预处理

## 🔧 开发信息

- **项目地址**：https://github.com/Peaceful-World-X/folder-alias-fixed
- **作者**：Peaceful-World-X
- **版本**：0.1.2
- **许可证**：GPL-3.0

## 🐛 问题反馈

如果您在使用过程中遇到任何问题或有功能建议，请通过以下方式联系：

- GitHub Issues：https://github.com/Peaceful-World-X/folder-alias-fixed/issues

## 📝 更新日志

### v0.1.2
- 修复了一些已知问题
- 优化了用户体验
- 更新了中文文档

## 🤝 贡献

欢迎提交 Pull Request 或 Issue 来帮助改进这个插件！

## 📄 许可证

本项目采用 GPL-3.0 许可证，详情请查看 [LICENSE](LICENSE) 文件。
