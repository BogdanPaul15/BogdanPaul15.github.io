import React from 'react'
import SubtitleTag from '../Utility/SubtitleTag/SubtitleTag'
import Subtitle from '../Utility/Subtitle/Subtitle';
import Description from '../Utility/Description/Description';
import BenefitsItem from './BenefitsItem/BenefitsItem';
import benefits from '../../data/benefits';
import "./Benefits.scss";

export default function Benefits() {
    return (
        <section className="benefitsSection">
            <SubtitleTag text="Beneficii" />
            <Subtitle text="Beneficiile Noastre" />
            <Description text="Iată câteva dintre beneficiile pe care le veți experimenta atunci când folosiți platforma noastră" />
            <div className="benefitsShowcase">
                {
                    benefits.map((benefit) => {
                        return <BenefitsItem key={benefit.id} title={benefit.title} description={benefit.description} icon={benefit.icon}  />
                    })
                }
            </div>
        </section>
    )
}