import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function BlogArchive() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="博客"
      description="思维工坊博客，分享 AI 技术和实践经验">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className={styles.blogTitle}>欢迎来到思维工坊博客</h1>
            <p className="text--large">
              这里是思维工坊的博客专区，我们会定期分享：
            </p>

            <h2>🚀 内容分类</h2>
            <ul className={styles.featureList}>
              <li>AI 技术前沿动态</li>
              <li>大模型实践教程</li>
              <li>开源项目分享</li>
              <li>技术社区动态</li>
            </ul>

            <h2>📚 精选文章</h2>
            <ul className={styles.articleList}>
              <li>
                <Link to="/blog/ollama_deploy.html">
                  小白也能看懂的本地大模型部署指南
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  更多文章...
                </Link>
              </li>
            </ul>

            <h2>💡 参与贡献</h2>
            <p>我们欢迎社区成员投稿分享自己的经验和见解。投稿方式：</p>
            <ol className={styles.contributionList}>
              <li>在 GitHub 上提交 Pull Request</li>
              <li>通过邮件投稿</li>
              <li>在讨论区发起话题</li>
            </ol>

            <div className={styles.actionButton}>
              <Link
                className="button button--primary button--lg"
                to="/blog">
                查看所有文章 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 