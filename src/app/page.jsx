import { getPortfolioData } from '@/services/portfolioService';
import { Header, Footer, Nav } from '@/core';
import { Hero, AboutUs, Contact, Timeline, Knowledge, Projects } from '@/components';
import ClientLogic from '@/components/ClientLogic';


export async function generateMetadata() {
    const data = await getPortfolioData();
    const { hero, aboutUs } = data;

    return {
        title: `${hero.name} - ${hero.title}`,
        description: aboutUs.description,
    };
}

export default async function Home() {
    const data = await getPortfolioData();
    const { info, navMenu, hero, aboutUs, experiences, knowledges, educations, contact, projects } = data;

    return (
        <div className='layout'>
            <ClientLogic />
            <Header className="layout-header" info={info} />
            <Nav className="layout-nav" navMenu={navMenu} />
            <main className="layout-main">
                <Hero hero={hero} />
                <AboutUs aboutUs={aboutUs} />
                <Projects dataCV={projects} />
                <Timeline dataCV={educations} title="Education" />
                <Knowledge knowledges={knowledges} />
                <Timeline dataCV={experiences} title="Experience" />
                <Contact contact={contact} />
            </main>
            <Footer className="layout-footer" info={info} />
        </div>
    );
}
