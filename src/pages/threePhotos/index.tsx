import React from 'react';
import Layout from '@theme/Layout';
import styles1 from './styles.module.css';

export default function ThreePhoto(): JSX.Element {
  return (
    <Layout>
      <div className="showcaseFavorite_src-pages-showcase-styles-module">
        <div className="container">
          <section className="margin-top--lg margin-bottom--xl">
            <div className={styles1.portfolio_section__projects}>
              <div className={styles1.portfolio_section__project}>
                <div
                  className={styles1.portfolio_section__project_image}
                  style={{
                    backgroundImage:
                      'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c83409147d349a1bb246e3d0ed5/1232x1232")',
                    transition:
                      'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                    filter: 'none',
                  }}></div>
                <div className={styles1.portfolio_section__project_title}>
                  Serverless
                </div>
                <div className={styles1.portfolio_section__project_description}>
                  Создавать простые навыки Алисы на базе Yandex Cloud Functions
                </div>
              </div>
              <div className={styles1.portfolio_section__project}>
                <div
                  className={styles1.portfolio_section__project_image}
                  style={{
                    backgroundImage:
                      'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834091e96fc52da39802810172/1232x1232")',
                    transition:
                      'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                    filter: 'none',
                  }}></div>
                <div className={styles1.portfolio_section__project_title}>
                  Kubernetes®
                </div>
                <div className={styles1.portfolio_section__project_description}>
                  Запускать контейнеры и создавать кластер с помощью Yandex
                  Managed Service for Kubernetes®
                </div>
              </div>
              <div className={styles1.portfolio_section__project}>
                <div
                  className={styles1.portfolio_section__project_image}
                  style={{
                    backgroundImage:
                      'url("https://avatars.mds.yandex.net/get-practicum/5473806/2a0000017c834093b1e4d8d8c72ab3de51c4/1232x1232")',
                    transition:
                      'background-image 0.3s ease-in-out 0s, background-size 0.2s ease 0s',
                    filter: 'none',
                  }}></div>
                <div className={styles1.portfolio_section__project_title}>
                  Управляемые базы данных
                </div>
                <div className={styles1.portfolio_section__project_description}>
                  Настраивать кластеры управляемых баз данных, хранить
                  и&nbsp;анализировать данные в&nbsp;облаке
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
