import Link from 'next/link';

import Container from '../components/Container';
import BlogPost from '../components/Blog/BlogPost';
import SubscribeCard from '../components/Cards/SubscribeCard';
import ProjectCard from '../components/Cards/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Rosnovsky Park™
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          Hi! I’m Art, Software Engineer from <a href="https://www.google.com/maps/place/Arlington,+WA/@48.1741806,-122.1844234,13z/" target="_blank" rel="noreferrer noopener" ><span className="text-green-700 font-semibold hover:text-green-900 dark:hover:text-green-200 dark:text-green-400 underline hover:cursor-pointer">Arlington, WA</span></a>. I work as a Customer Onboarding Engineer @ Auth0. <Link href="/about"><span className="text-green-700 dark:text-green-400  underline hover:cursor-pointer font-semibold hover:text-green-900 dark:hover:text-green-200">AMA</span></Link>!
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Featured Posts
        </h3>
        <BlogPost
          title="Loowit Trail"
          summary="It was a terrible mistake and I shouldn't have done this trail. Sheer luck and generosity of other hikers are the only two reasons I'm not a hero of an article about local Search and Rescue trying to airlift an unconscious hiker from Mt. St. Helens."
          slug="loowit-trail"
          publishedAt="20/09/18"
        />
        <BlogPost
          title="Developer Support Observations"
          summary={`It's been just over 6 months since I joined Auth0 as their newest Developer Support Engineer. A bunch of my highbrow friends was very condescending. "Oh, tech support. Good for you. With time, you'll become a real engineer". I shrugged these comments off back then, but now I think it was cute of them to say things like this. As in "Aww, honey. You have no idea what you're talking about" :)`}
          slug="developer-support-observations"
          publishedAt="2020/05/24"
        />
        <BlogPost
          title="You don't have to follow a passion"
          summary="I was driving to work this morning, looking forward to a weekly Q&A with Nico (deep dive into HAR files this week), when I realized that it’s my day off. Whenever we work on weekends, we can then take a day off during the week. Well, today was the day, and I forgot about it."
          slug="you-don-t-have-to-follow-a-passion"
          publishedAt="2020/01/23"
        />
        <BlogPost
          title="30 Best Tech and Dev Podcasts"
          summary="Here’s a list of my favorite podcasts. Some of them are in their second decade of running, some are pretty new, but all of them are a tremendous source of knowledge, news, and human experience as it relates to hitech industry in general, and software development in particular."
          slug="tech-podcasts-in-2019"
          publishedAt="2019/06/19"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        
        <ProjectCard
          title="Sanity.io Autocomplete Tags plugin"
          description="This plugin creates a custom tags input field for Sanity Studio. This custom input field allows users to type tags, select existing ones from the dropdown or create new ones. This is handy if you want to offer authors an experience of 'type, hit Enter, repeat' for adding tags."
          href="https://www.sanity.io/plugins/autocomplete-tags"
          icon="react"
        />
        <ProjectCard
          title="Indian Stories and Legends of the Stillaguamish and Allied Tribes"
          description="Amateur painter, anthropologist, photographer, botanist, geologist, and musician, in 1926, Nels Bruseth published a small book, Indian Stories and Legends of the Stillagaumish and Allied Tribes."
          href="https://native-stories.vercel.app"
          icon="css"
        />
        <SubscribeCard />
      </div>
    </Container>
  );
}
