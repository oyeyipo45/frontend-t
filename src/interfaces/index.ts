export interface PostItemInterface {
  post: IPost;
}


export interface PostsListInterface {
    data: IPost[];
}


export interface IPost {
    title: string,
    isCompleted: boolean
    _id: string
}


export interface PostResponse {
  data: IPost[];
  message: string;
}