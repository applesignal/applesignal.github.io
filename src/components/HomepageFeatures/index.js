import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '開服歷程',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        從2019年已開始鑽研Fivem開發並建立自己的伺服器<br></br>
		最高峰達100+人數同時登錄<br></br>並在台灣Fivem列表上排行第一名(三個月)
      </>
    ),
  },
  {
    title: '經驗豐富',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我熟悉 Lua/JS/Html/Css/PHP<br></br>這些都是Fivem會應用到的語言代碼<br></br>我可以很輕鬆地為你解決任何疑難及錯誤
      </>
    ),
  },
  {
    title: '非一般的掛名技術',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        大多稱自己為技術員只會安裝/移除插件<br></br>對腳本代碼完全一竅不通,遇到bug只會讓你換個插件<br></br>或是作個藉口以你的錯誤不予處理,容易跑路
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
