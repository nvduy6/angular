export interface IpProject {
    id?: number,
    name: string,
    image: string,
    createAt: string,
    categoryProjectId: number | string,
    categoryProject?:{
        name?: string,
        id?: number | string,
    };
    short_desc: string,
    desc: string
}