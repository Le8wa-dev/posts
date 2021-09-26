import { useMemo } from 'react'

const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
	const sortedAndSearchedPosts = useMemo(() => {
		if (query) {
			return [...sortedPosts].filter(post => post.title.toLowerCase().indexOf(query.toLowerCase().trim()) !== -1 || post.body.toLowerCase().indexOf(query.toLowerCase().trim()) !== -1)
		}
		return sortedPosts;

	}, [query, sortedPosts])

  return sortedAndSearchedPosts
}
