import React from 'react'

import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

export const ShareButtons: React.FC<{ url: string; title: string }> = ({
  url,
  title
}) => {
  return (
    <>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  )
}
