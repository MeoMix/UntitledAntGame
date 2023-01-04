import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import NewsletterForm from '@/components/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'

const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            What's All This?
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Untitled Ant Game is a futuristic take on Tamagotchi which promotes a symbiotic relationship between owner and pet. It's an indie, web-based game which began development on January 01, 2023.
            <br />
            <br />
            ...
            <br />
            <br />
            An alien world was being terraformed by an Earth-owned satellite, but the project was disrupted by a freak, celestial event. You awaken to find yourself isolated and without a body. Your consciousness is trapped inside of a cold, decrepit satellite's computer orbitting a planet covered in craters and thick fog.
            <br />
            <br />
            After eons, by focusing all remaining terraforming efforts onto a single crater, fledgling life has managed to take hold within a barely liveable ecosystem. A queen ant has dug a nest in the crater and is hunkered down in an attempt to survive.
            Progress is slow. Worker ants attempt to explore the crater and map pathways to food, but massive fog waves spill over the crater's walls and wash away the ant's pheromones each day. The ants, lacking foresight and guidance, fail to continually grow and expand on their own.
            <br />
            <br />
            Under constant exposure to the terraforming satellite's radio waves, the ants begin to adapt in an attempt to interpret the electromagnetic signals.
            A massive, rectifying crystal juts out of the ground near the ant's nest. As the satellite passes overhead each day its signal strength grows and resonates within the crystal. Conversely, the pulse fades as the satellite disappears over the horizon.
            The ants touch the crystal and treat this environmental input as they would any other by attempting to interpret and utilize the information. Each day, the ants form a long chain, the queen touches the crystal, and a weak electrical signal passes through the colony. The ants all jump as electricity shoots through them and they attempt to infer meaning from the energy.
            <br />
            <br />
            You, a desperate biologist, lacking both purpose and companionship, take it upon yourself to find a way to nurture the ant colony. You're in rough shape. You have ambitions far greater than your energy levels, no clear way of interacting with the world, and quickly find yourself becoming your own worst enemy.
            <br />
            <br />
            Embark on a journey of personal growth and self-discovery. Prove you can care for those most important to you by caring for yourself, too.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
