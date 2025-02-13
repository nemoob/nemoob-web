---
slug: springai_ollama.html
title: SpringAI 接入 ollama（一）
authors: [masterY]
tags: [ollama, springai]
---

<!-- 实战篇： -->

## 前言

SpringAI 是 Spring 社区推出的一个用于构建 AI 应用的框架，它提供了一系列的注解和工具，帮助开发者快速构建 AI 应用。

## 实战

### 本地开启 Ollama

要在本地开启 Ollama，您需要按照以下步骤进行操作：

1. **启动 Ollama**：在终端中运行以下命令以启动 Ollama：
   ```sh
   ollama run <模型名称>
   ```
   例如，如果您想运行一个名为 "llama" 的模型，可以使用：
   ```sh
   ollama run llama
   ```

2. **访问模型**：一旦模型启动，您可以通过 HTTP 请求与其交互。默认情况下，Ollama 会在 `http://localhost:8080` 上提供服务。

3. **测试模型**：您可以使用 `curl` 命令或 Postman 等工具发送请求来测试模型。例如，使用 `curl` 发送请求：
   ```sh
   curl -X POST http://localhost:8080/generate -H "Content-Type: application/json" -d '{"prompt": "你好，Ollama！", "max_tokens": 50}'
   ```

4. **查看结果**：Ollama 将返回生成的文本，您可以在终端或工具中查看。

通过以上步骤，您可以在本地成功开启并使用 Ollama 进行 AI 应用开发。


<!-- Start Generation Here -->

### 创建 Java 应用

要创建一个整合 SpringAI 的 Java 应用，您可以使用 Maven 或 Gradle 作为构建工具。以下是使用 Maven 创建项目的步骤：

1. **创建 Maven 项目**：
   在终端中运行以下命令以创建一个新的 Maven 项目：
   ```sh
   mvn archetype:generate -DgroupId=com.example -DartifactId=springai-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
   ```

2. **添加依赖**：
   在 `springai-app/pom.xml` 文件中，添加 SpringAI 和其他必要的依赖：(JDK 最低版本 17)
   ```xml
   
    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.ai</groupId>
                <artifactId>spring-ai-bom</artifactId>
                <version>0.8.0</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.ai</groupId>
            <artifactId>spring-ai-ollama-spring-boot-starter</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>
   ```

3. **创建主应用程序类**：
   在 `src/main/java/com/example` 目录下创建 `Application.java` 文件，并添加以下代码：
   ```java
   package com.example;

   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;

   @SpringBootApplication
   public class Application {

      public static void main(String[] args) {
         SpringApplication.run(Application.class, args);
      }

   }
   ```

4. **创建控制器**：
   在 `src/main/java/com/example` 目录下创建 `ChatController.java` 文件，并添加以下代码：
   ```java
   package com.example;

   import lombok.RequiredArgsConstructor;
   import org.springframework.ai.chat.ChatClient;
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.web.bind.annotation.RequestMapping;
   import org.springframework.web.bind.annotation.RestController;

   import java.util.Objects;

   @RestController
   @RequestMapping("/chat")
   @RequiredArgsConstructor(onConstructor = @__(@Autowired))
   public class ChatController {

      private final ChatClient chatClient;

      // 简单使用文本聊天
      @RequestMapping(value = "message")
      public Object msg(String prompt) {
         // 根据参数调用 chatClient call 方法
         String result = chatClient.call(prompt);
         return String.format("%s:%s",message,result);
      }
   }
   ```

5. **运行应用**：
   在项目根目录下，运行以下命令以启动应用：
   ```sh
   mvn spring-boot:run
   ```

6. **测试应用**：
   您可以使用 `curl` 或 Postman 发送请求来测试生成接口：
   ```sh
   curl -X POST http://localhost:8080/chat/message -H "Content-Type: application/json" -d '{"prompt": "你好，SpringAI！"}'
   ```

通过以上步骤，您可以成功创建一个整合 SpringAI 的 Java 应用。

<!-- End Generation Here -->

## 总结

通过以上步骤，您可以成功创建一个整合 SpringAI 的 Java 应用。首先，您需要创建一个控制器 `ChatController`，该控制器使用 `ChatClient` 来处理文本聊天请求。然后，您可以通过运行 Maven 命令启动应用，并使用 `curl` 或 Postman 测试生成接口。这样，您就可以在本地环境中体验 SpringAI 的强大功能。
