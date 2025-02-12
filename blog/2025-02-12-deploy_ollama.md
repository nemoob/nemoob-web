---
slug: ollama_deploy
title: 小白本地也可以部署大模型！
authors: [masterY]
tags: [ollama, deploy]
---

## 引言

随着大语言模型（LLM）的发展，像 ChatGPT、Llama、Mistral 这样的模型已经能在很多任务上提供强大的 AI 支持。然而，很多人以为只有云端可以运行大模型，其实本地同样可以部署！

本篇文章面向小白，详细介绍如何使用 Ollama 在自己的电脑上部署大模型，体验本地 AI 助手的乐趣。

---

## 1. 为什么要本地部署大模型？

相比于在线 API，本地部署有以下优点：

- **隐私保护**：无需将数据上传至云端，确保个人信息安全。
- **无 API 限制**：不受 API 调用次数、速率等限制。
- **低延迟**：本地推理避免了网络请求延迟，响应速度更快。
- **完全离线**：适用于无网络环境或对网络安全要求高的场景。

当然，本地部署的门槛比云端 API 略高，需要一定的计算资源和环境配置。

---

## 2. 部署前的准备

### 2.1 你的电脑能跑大模型吗？

大模型的计算需求较高，建议的最低配置如下：

| 设备类型 | CPU | 显卡 (GPU) | 内存 (RAM) |
|----------|-----------------|------------------|------------|
| **最低要求** | i5 以上 | 无 GPU / 4GB VRAM | 8GB |
| **推荐配置** | i7 / Ryzen 7 | RTX 3060（12GB VRAM）| 16GB |
| **高性能配置** | i9 / Ryzen 9 | RTX 4090（24GB VRAM）| 32GB |

如果没有独立显卡，Ollama 也支持 CPU 运行，但速度会较慢。

### 2.2 安装 Ollama

Ollama 是一个简化大模型本地部署的工具，支持 Windows、macOS 和 Linux。

1. **下载 Ollama**：[官网 Ollama](https://ollama.com/) 
2. **安装 Ollama**：根据不同系统的安装包进行安装。
3. **验证安装**：安装完成后，在终端运行：
   ```sh
   ollama --version
   ```
   如果成功显示版本号，说明安装成功。

---

## 3. 下载并运行大模型

Ollama 预装了一些流行的开源大模型，如 Llama3、Mistral、Gemma 等。

### 3.1 下载 Llama3 模型

在终端执行：
```sh
ollama pull llama3
```

等待模型下载完成。

### 3.2 运行大模型

直接运行：
```sh
ollama run llama3
```

然后你可以直接在终端与模型对话！

### 3.3 通过 API 调用 Ollama

如果想在自己的应用中使用 Ollama，可以启用 API：
```sh
curl http://localhost:11434/api/generate -d '{"model": "llama3", "prompt": "你好，大模型！"}'
```

或者使用 Python：
```python
import requests

response = requests.post("http://localhost:11434/api/generate", json={"model": "llama3", "prompt": "你好，大模型！"})
print(response.json()["response"])
```

---

## 4. 让本地模型更好用

### 4.1 Web 界面管理

Ollama 可与 [Ollama Web UI](https://github.com/jmorganca/ollama-web) 结合使用：
```sh
git clone https://github.com/jmorganca/ollama-web.git
cd ollama-web
npm install
npm run dev
```

然后访问 `http://localhost:3000` 即可使用。

### 4.2 自定义模型

如果想微调自己的模型，可以创建 `Modelfile`：
```sh
FROM llama3
PARAMETER temperature 0.7
``` 
然后运行：
```sh
ollama create mymodel -f Modelfile
```
之后就可以 `ollama run mymodel` 了。

---

## 5. 总结

使用 Ollama 可以让小白也能轻松在本地部署大模型，核心流程是：

1. **安装 Ollama**（简单易用，支持多平台）
2. **下载模型**（Llama3、Mistral、Gemma 等）
3. **运行和交互**（终端或 API 方式调用）
4. **优化体验**（Web UI、自定义模型等）

本地部署让我们更自由地探索 AI，赶快试试吧！
