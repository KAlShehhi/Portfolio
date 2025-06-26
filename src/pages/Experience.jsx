import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import GlassmorphismDiv from '../../util/GlassmorphismDiv';
import aths from '../assets/aths.png'
import egov from '../assets/egov.png'
import uaeu from '../assets/uaeu.png'
export default function Experience() {
    return (
        <div className='flex flex-col items-center'>
            <GlassmorphismDiv otherStyles={"max-w-96 mt-10"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente rerum unde natus molestiae eveniet, in autem corrupti aut veritatis! Omnis, iusto? Voluptatibus voluptatum iure aspernatur asperiores distinctio delectus quod.
            </GlassmorphismDiv>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2015 - 2019"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-3'>

                            <img src={aths} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Applied Technology Schools</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        High school Diploma in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2019"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-3'>
                            <img src={egov} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Electronic Goverment Authority Intership</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        IT support intern
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2021 - 2024"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-4'>

                            <img src={uaeu} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Applied Technology Schools</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        High school Diploma in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2015 - 2019"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-3'>

                            <img src={aths} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Applied Technology Schools</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        High school Diploma in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2015 - 2019"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-3'>

                            <img src={aths} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Applied Technology Schools</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        High school Diploma in Computer Science
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000' }}
                    date="2015 - 2019"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={
                        <div className='flex justify-center items-center align-bottom mt-3'>

                            <img src={aths} className='w-10'></img>
                        </div>
                    }
                >
                    <h3 className="vertical-timeline-element-title">Applied Technology Schools</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ras Al Khimah, UAE</h4>
                    <p>
                        High school Diploma in Computer Science
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>

    )
}