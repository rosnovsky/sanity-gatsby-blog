const OpenGraph = ({
  title,
  category,
  date,
  coverImage,
}: {
  title: string
  category: string
  date: string
  url?: string
  coverImage: string
}) => {
  const bgUrl = `url('${coverImage}?blur=80')`
  return (
    <div className="m-0 flex w-full">
      <div
        className="relative border-1 bg-transparent w-full border-red-900 p-6"
        style={{
          backgroundImage: bgUrl,
          backgroundRepeat: 'no-repat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
        }}
      >
        <main className="p-5 bg-opacity-80 bg-white border-2 border-black">
          <h3 className="text-red-900 font-bold font-mono mt-7 text-xl w-96">
            {category || 'No category'}
          </h3>
          <h1 className="text-6xl leading-tight font-black mt-7">
            {title || 'No Title'}
          </h1>
          <div className="flex justify-between">
            <p className="prose prose-lg text-2xl text-red-900 font-semibold font-mono mt-40">
              {date || 'No date'}
            </p>
            <p className="font-mono mt-40 text-2xl font-bold underline text-red-900 ">
              rosnovsky.us
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default OpenGraph

export async function getServerSideProps(params: any) {
  const {
    title = 'No Title',
    category = 'No Categories',
    date = 'No Date',
    coverImage = 'No Cover',
  } = params.query
  return {
    props: {
      title,
      category,
      date,
      coverImage,
    },
  }
}
