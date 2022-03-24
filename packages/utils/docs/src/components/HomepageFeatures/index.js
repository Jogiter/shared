import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '代码即文档',
    Svg: require('../../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>
          使用 <a href="https://tsdoc.org/">tsdoc</a> 风格编写代码
        </p>
        <p>自动校验文档规范，自动生成文档</p>
      </>
    ),
  },
  {
    title: '使用 typescript 编写',
    Svg: require('../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>所有的函数及单元测试都是使用 typescript 编写</p>
        <p>提供了完备的类型声明和示例</p>
      </>
    ),
  },
  {
    title: '高测试覆盖率',
    Svg: require('../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>单元测试覆盖所有函数</p>
        <p>且覆盖率均高于 80%</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div>{description}</div>
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
