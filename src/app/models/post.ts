export interface IpPost{
    id?:number,
    title:string,
    image:string,
    createAt:string,
    categoryBlogId:number|string,
    categoryBlog?: {
        name?: string,
        id?: number | string,
    };
    short_desc:string,
    desc:string

}