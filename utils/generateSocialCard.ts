interface Config {
  title: string
  publishedAt: string
  postTag: string
  cloudName: string
  imagePublicID: string
  cloudinaryUrlBase: string
  version?: boolean | null
  titleFont?: string
  titleExtraConfig?: string
  postTagExtraConfig?: string
  postTagFont?: string
  imageWidth?: number
  imageHeight?: number
  textAreaWidth?: number
  textLeftOffset?: number
  titleBottomOffset?: number
  postTagTopOffset?: number
  textColor?: string
  titleFontSize?: number
  postTagFontSize?: number
  dateRightOffset?: number
  dateTopOffset?: number
  postTagRightOffset?: number
  titleColor?: string
  postTagColor?: string
  dateColor?: string
  dateFont?: string
  dateFontSize?: number
  dateExtraConfig?: string
}

export default function generateSocialImage({
  title,
  publishedAt,
  postTag,
  cloudName,
  imagePublicID,
  cloudinaryUrlBase = 'https://res.cloudinary.com',
  version = null,
  titleFont = 'raleway',
  titleExtraConfig = '',
  imageWidth = 1280,
  imageHeight = 669,
  textAreaWidth = 760,
  textLeftOffset = 140,
  titleBottomOffset = 220,
  postTagTopOffset = 68,
  postTagRightOffset = 370,
  titleColor = 'FFFFFF',
  postTagColor = 'FFFFFF',
  dateColor = 'FEFEFE',
  dateTopOffset = 580,
  dateRightOffset = 420,
  titleFontSize = 96,
  dateFont = 'pt%20mono',
  dateFontSize = 28,
}: Config): string {
  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    'c_fill',
    'q_auto',
    'f_auto',
  ].join(',')

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    'c_fit',
    `co_rgb:${titleColor}`,
    'g_south_west',
    `x_${textLeftOffset}`,
    `y_${titleBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}_black${titleExtraConfig}:${encodeURIComponent(
      title
    )}`,
  ].join(',')

  // configure the tagline text
  const dateConfig = [
    `w_${textAreaWidth}`,
    'c_fit',
    `co_rgb:${dateColor}`,
    'g_north_west',
    `x_${dateRightOffset}`,
    `y_${dateTopOffset}`,
    `l_text:${dateFont}_${dateFontSize}_bold:${encodeURIComponent(publishedAt)}`,
  ].join(',')

  const bottomLineConfig = [
    `w_${textAreaWidth}`,
    'c_fit',
    `co_rgb:${postTagColor}`,
    'g_north_east',
    `x_${postTagRightOffset}`,
    `y_${postTagTopOffset}`,
    `l_text:${dateFont}_${dateFontSize}_bold:${encodeURIComponent(postTag)}`,
  ].join(',')

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    'image',
    'upload',
    imageConfig,
    titleConfig,
    dateConfig,
    bottomLineConfig,
    // urlConfig,
    version,
    imagePublicID,
  ]

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean)

  // join all the parts into a valid URL to the generated image
  return validParts.join('/')}
