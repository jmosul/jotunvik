import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: any;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Giant Stewards',
        img: require('./images/council_256.webp').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Commerce',
        img: require('./images/market_256.webp').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Collaboration',
        img: require('./images/balcony_256.webp').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    }
];

function Feature({title, img, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className={styles.featureContainer}>
                <img className={styles.featureSvg} src={img} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
