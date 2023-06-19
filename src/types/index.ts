export interface RedditPost {
    title: string;
    thumbnail: string;
    permalink: string;
    ups: number;
    downs: number;
    num_comments: number;
    subreddit_name_prefixed: string;
    is_video: boolean;
    media?: {
        reddit_video?: {
            fallback_url?: string;
        }
    }
}

export interface Post extends RedditPost {
    videoUrl?: string;
}

export interface RedditApiData {
    children: { data: RedditPost }[]
    after: string
}

export const mapDataToPosts = ({children}: RedditApiData): Post[] => children.map(postItem => {
    const {
      title, thumbnail, is_video, permalink, subreddit_name_prefixed,
      ups, downs, num_comments,
    } = postItem.data;

    return {
      title,
      thumbnail,
      permalink: `https://www.reddit.com${permalink}`,
      is_video, subreddit_name_prefixed,
      ups, downs, num_comments,
      videoUrl: is_video ? postItem.data.media?.reddit_video?.fallback_url : '',
    };
});
