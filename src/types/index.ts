export interface RedditPost {
    title: string;
    thumbnail: string;
    permalink: string;
    ups: number;
    downs: number;
    num_comments: number;
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
