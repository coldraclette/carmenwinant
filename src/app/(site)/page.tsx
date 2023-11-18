import { getLandingPage } from '../../../sanity/sanity.query';
import ProjectsList from './components/ProjectsList';

// import { getProjectsData } from './lib/api';

export const revalidate = 120;

export default async function Page() {
  const { projects } = await getLandingPage();

  if (!projects) return;

  return <ProjectsList projects={projects} />;
}
