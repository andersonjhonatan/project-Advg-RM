import BlogComponent from '@/components/BlogComponentPage'
import Head from 'next/head'
import React from 'react'

const BlogPages = () => {
  return (
    <div className="mt-28 w-full h-full">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Blog sobre direito e direitos previdenciários." />
        <meta name="keywords" content="direito, direitos previdenciários, advocacia" />
        <meta name="author" content="Rosa Muniz" />
      </Head>
      <BlogComponent />
    </div>
  )
}

export default BlogPages
